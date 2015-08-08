"use strict";

var React = require("react");
var GameStore = require("./../stores/GameStore");
var StartButton = require("./StartButton.jsx");

function getGameState() {
  return {
    gameInProgress: GameStore.gameInProgress()
  };
}

var TodoApp = React.createClass({

  getInitialState: function() {
    return getGameState();
  },

  componentDidMount: function() {
    GameStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    GameStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <StartButton gameInProgress={this.state.gameInProgress} />
      </div>
    );
  },

  _onChange: function() {
    this.setState(getGameState());
  }

});

module.exports = TodoApp;
