import _ from 'lodash';
import moment from 'moment';
import React from 'react';

import DateString from './date';
import DateTimePicker from './dateTimePicker';
import IconButton from './iconButton';
import AskUserDialog from './askUserDialog';
import { connectRedux, routing } from '../helpers/decorators';
import * as DateUtils from '../../utils/date';
import * as StringUtils from '../../utils/string';
import AlloyEditor from 'alloyeditor';



var Component = React.createClass({
  propTypes: {
    entryId: React.PropTypes.string,
    canDelete: React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      entryId: null,
      canDelete: false,
    };
  },

  getInitialState: function() {
    return {
      changedToDate: null,
    };
  },

  render: function() {
    var entry = this._getActiveEntry();

    var entryDate = moment(entry.ts || Date.now()),
      body = entry.body || '';

    var deleteButton = null;
    if (this.props.canDelete) {
      deleteButton = (
        <span className="delete-button">
          <IconButton
            onClick={this._onDelete}
            icon="trash" 
            tooltip="Delete entry"/>
          <AskUserDialog 
            ref="confirmDelete"
            msg="Are you sure you wish to delete this entry?"
            buttons={["Yes", "No"]} />
        </span>
      );
    }

    let dateFormat = (entryDate.year() !== moment().year()) 
      ? 'MMMM Do, YYYY'
      : 'MMMM Do';

    let timeFormat = 'h:mma';

    return (
      <div className="entryEditor">
        <div className="meta">
          <DateString className="day" format={dateFormat} date={entryDate} />
          <DateString className="time" format={timeFormat} date={entryDate} />
          <DateTimePicker 
            onSelect={this._onChangeDate} 
            date={entryDate} 
            tooltip="Change date and time" />
          {deleteButton}
        </div>
        <div className="editor">
          <div className="body" data-placeholder="Type here..." 
            id={this._elementId}>
              {body}
          </div>
        </div>
      </div>
    );
  },


  componentWillUnmount: function() {
    if (this._editor) {
      this._editor.destroy();
    }
  },

  componentWillMount: function() {
    this._elementId = 'editor' + StringUtils.random(10);
  },

  componentDidMount: function() {
    this._editor = AlloyEditor.editable(this._elementId, {
      toolbars: {
        styles: {
          selections: [
            {
              name: 'text',
              buttons: [
                {
                  name: 'styles',
                  cfg: {
                    styles: [
                      {
                        name: 'Heading 1',
                        style: { element: 'h1' }
                      },
                      {
                        name: 'Heading 2',
                        style: { element: 'h2' }
                      },
                      {
                        name: 'Small',
                        style: { element: 'small' }
                      },
                      {
                        name: 'Code',
                        style: { element: 'code' }
                      }
                    ],
                  }
                },
                'bold', 'italic', 'underline', 
                'strike', 'ul', 'ol', 'quote', 'removeFormat'
              ],
              test: AlloyEditor.SelectionTest.text,
            },
            {
              name: 'link',
              buttons: ['linkEdit'],
              test: AlloyEditor.SelectionTest.link,
            },
          ]
        },
        // add: {
        //   buttons: ['hline']
        // },
      }
    });

    // https://github.com/heartnotes/heartnotes/issues/3
    // this.editor.on('instanceReady', () => {
    //   console.log(this._editor.nativeEditor.document.$.inputEncoding);
    //   console.log(this._editor.nativeEditor.document.$.characterSet);
    //   console.log(this._editor.nativeEditor.document.$.charset);
    // });

    // save content only every second
    this._editor._editor.on('change', _.debounce(() => {
      let entry = this._getActiveEntry();

      this.props.actions.updateEntry(
        entry.id, entry.ts, this._editor._editor.getData()
      );
    }, 500));

    // set initial content
    this._setBody();
  },


  shouldComponentUpdate: function(newProps, newState) {
    let { diaryMgr } = this.props.data.diary;

    var newId = newProps.entryId || -1,
      oldId = this.props.entryId || -1;

    var oldDate = DateUtils.getNormalizedTimestamp(this.state.changedToDate || Date.now()),
      newDate = DateUtils.getNormalizedTimestamp(newState.changedToDate || Date.now());

    var oldIsReady = !!this.props.data.entries,
      newIsReady = !!newProps.data.entries;

    // Disable for now until we resolve https://github.com/heartnotes/heartnotes/issues/54
    let updatedViaSync = false;//diaryMgr.didEntryGetUpdatedInLastSync(oldId);

    return (
      updatedViaSync || 
      newId !== oldId || 
      oldDate !== newDate || 
      (newIsReady && !oldIsReady)
    );
  },


  componentWillUpdate: function(newProps) {
    var newId = newProps.entryId || -1,
      oldId = this.props.entryId || -1;

    if (newId !== oldId) {
      this.setState({
        changedToDate: null,
      });
    }
  },


  componentDidUpdate: function(oldProps) {
    let { diaryMgr } = this.props.data.diary;

    var newId = this.props.entryId || -1,
      oldId = oldProps.entryId || -1;

    // Disable for now until we resolve https://github.com/heartnotes/heartnotes/issues/54
    let updatedViaSync = false;//diaryMgr.didEntryGetUpdatedInLastSync(newId);

    if (updatedViaSync || newId !== oldId) {
      this._setBody();

      if (updatedViaSync) {
        diaryMgr.removeEntryLastSyncUpdatedIndicator(newId);
      }
    }
  },


  _getActiveEntry: function() {
    let entry = null;

    let diaryMgr = this.props.data.diary.diaryMgr;

    if (this.state.changedToDate) {
      entry = diaryMgr.getEntryByDate(this.state.changedToDate);

      if (!entry) {
        entry = {
          ts: this.state.changedToDate,
        };
      }
    } else {
      entry = diaryMgr.getEntryById(this.props.entryId) || {};
    }

    return entry;
  },


  _setBody: function() {
    let entry = this._getActiveEntry();

    this._editor._editor.setData(entry.body || '', {
      noSnapshot: true
    });
  },


  _onChangeDate: function(newDate) {
    this.setState({
      changedToDate: newDate,
    });
  },


  _onDelete: function() {
    this.refs.confirmDelete.ask((choice) => {
      if ('Yes' === choice) {
        this.props.actions.deleteEntry(this._getActiveEntry().id)
          .then(() => {
            this.props.history.navigate('/entries');
          });
      }
    });
  },


});



module.exports = connectRedux([
  'updateEntry',
  'deleteEntry',
])(routing()(Component));

