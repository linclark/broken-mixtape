"use strict";

var React = require("react");
var GameStore = require("./../stores/GameStore");
var StartGame = require("./StartGame.jsx");

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
        <StartGame gameInProgress={this.state.gameInProgress} />
      </div>
    );
  },

  _onChange: function() {
    this.setState(getGameState());
  }

});

module.exports = TodoApp;
