import _ from 'lodash';
import React from 'react';
import Classnames from 'classnames';

import { connectRedux, routing } from '../../helpers/decorators';
import Button from '../button';
import AttentionIcon from '../attentionIcon';
import TabMenu from '../tabMenu';




var Component = React.createClass({
  propTypes: {
    tab: React.PropTypes.string,
  },

  render: function() {
    const ITEMS = [
      {
        id: 'account',
        route: '/settings',
        desc: 'Account',
        attention: () => {
          let { diaryMgr } = this.props.data.diary;

          return (!diaryMgr.auth.subscriptionActive) 
            ? <AttentionIcon /> 
            : null;
        },
      },
      {
        id: 'backupRestore',
        route: '/settings/backupRestore',
        desc: 'Backup / Export',
        showIf: () => {
          return !!_.get(this.props.data, 'diary.backupsEnabled');
        },
      },
      {
        id: 'feedback',
        route: '/feedback',
        desc: 'Feedback',
      },
    ];

    return (
      <TabMenu 
        className="settings-top-menu" 
        items={ITEMS} 
        selectedItem={this.props.tab}
        onSelect={this._onSelect} />
    );
  },

  _onSelect: function(item) {
    this.props.router.push(item.route);
  },

});



module.exports = connectRedux()(routing()(Component));
