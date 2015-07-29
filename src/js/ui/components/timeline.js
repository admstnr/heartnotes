var React = require('react');

var EntryList = require('./entryList'),
  EntryListFilter = require('./entryListFilter');


module.exports = React.createClass({
  propTypes: {
    entries : React.PropTypes.object,
    selected : React.PropTypes.string,
    updateFilter: React.PropTypes.func,
    onSelect: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      entries : [],
      selected: null,
      onSelect: null,
      updateFilter: null,
    };
  },

  render: function() {
    return (
      <div className="timeline">
        <EntryList 
          entries={this.props.entries} 
          selected={this.props.selected}
          onSelect={this.props.onSelect} />
      </div>
    );
  },

});



