"use strict";

var React = require("react");
var GameStore = require("./../stores/GameStore");
var StartGame = require("./StartGame.jsx");
var Game = require("./Game");

var Main = React.createClass({

  getInitialState: function() {
    return GameStore.getGameState();
  },
  componentDidMount: function() {
    GameStore.addChangeListener(this._onChange);
  },
  componentWillUnmount: function() {
    GameStore.removeChangeListener(this._onChange);
  },
  render: function() {
    var {gameInProgress, ...props} = this.state;
    var currentScreen;

    if (!gameInProgress) {
      currentScreen = <StartGame />
    }
    else {
      currentScreen = <Game {...props} />
    }
    return (
      <div>
        {currentScreen}
      </div>
    );
  },
  _onChange: function() {
    this.setState(GameStore.getGameState());
  }

});

module.exports = Main;
