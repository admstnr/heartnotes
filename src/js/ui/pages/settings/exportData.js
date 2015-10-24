var _ = require('lodash'),
  React = require('react');

var moment = require('moment');

var Button = require('../../components/button'),
  ExportDataProgressPopup = require('../../components/exportDataProgressPopup');


import { connectRedux } from '../../helpers/decorators';


var Component = React.createClass({
  render: function() { 
    var exportDataButtonAttrs = {
      onClick: this._export,
      animActive: !!this.props.nowExportingData,
    };

    return (
      <div className="exportData">
        <h2>Export my data</h2>
        <ExportDataProgressPopup {...this.props}>
          <Button {...exportDataButtonAttrs}>Export to file</Button>
        </ExportDataProgressPopup>
      </div>
    );
  },


  _export: function(e) {
    e.preventDefault();
    
    this.props.actions.exportData();
  },

});


module.exports = connectRedux([
  'exportData'
])(Component);

