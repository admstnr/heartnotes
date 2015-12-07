var React = require('react');


var Icon = require('../../components/icon'),
  Button = require('../../components/button');

import { connectRedux } from '../../helpers/decorators';


var Component = React.createClass({
  propTypes: {
    showStep: React.PropTypes.func.isRequired,
    isActive: React.PropTypes.bool.isRequired,
  },

  render: function() { 
    let activity = this.props.data.diary.loadingEntries;

    let progressMsg = "Loading diary...",
      progressMsg2 = activity.progressMsg;

    if (progressMsg2) {
      progressMsg2 = (
        <span>
          <Icon name="cog" spin={true} />
          {progressMsg2}
        </span>
      );
    }

    let loadingError = null;
    if (activity.error) {
      progressMsg += 'failed!';

      let msg = (
        <span>{activity.error.toString()}</span>
      );

      loadingError = (
        <div>
          <div className="error">
            <Icon name="exclamation-triangle" />
            {msg}
          </div>
          <Button size="xs" color="dark" onClick={this._goBack}>Back</Button>
        </div>
      );
    }

    return (
      <div className="load-diary step">
        <p>{progressMsg}</p>
        <p className="progress-message">{progressMsg2}</p>
        {loadingError}
      </div>
    );
  },


  componentDidUpdate: function(oldProps) {
    if (!this.props.isActive) {
      return;
    }

    // if just became active then kick-off entry loading
    if (!oldProps.isActive) {
      this.props.actions.loadEntries();
    }
  },

  _goBack: function() {
    this.props.showStep('start');
  },

});



module.exports = connectRedux(['loadEntries'])(Component);

