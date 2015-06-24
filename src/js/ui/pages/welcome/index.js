var React = require('react'),
  ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

import FluxComponent from 'flummox/component';




var steps = {
  start: require('./start'),
  newDiary: require('./newDiary'),
  existingDiary: require('./existingDiary'),
  loadDiary: require('./loadDiary'),
};


module.exports = React.createClass({
  getInitialState: function() {
    return {
      step: 'start',
    }
  },

  render: function() { 
    return (
      <div className="welcomeView">
        <div className="logo" />
        <h1>Heartnote</h1>
        <div className="step-container">
          <ReactCSSTransitionGroup transitionName="steps">
            {this._buildCurrentStep()}
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  },


  _buildCurrentStep () {
    var Step = steps[this.state.step];

    return (
      <div>
        <FluxComponent connectToStores={{
          user: store => ({
            lastDataFile: store.lastDataFile(),
            derivedKeys: store.state.derivedKeys,
          }),
          entries: store => ({
            loadEntriesError: store.state.loadEntriesError,
          })
        }}>
          <Step key={"stepkey" + this.state.step} showStep={this._showStep} />
        </FluxComponent>
      </div>
    );
  },


  _showStep: function(name) {
    this.setState({
      step: name
    });
  },
});

