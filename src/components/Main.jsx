"use strict";

var React = require("react");
var GameStore = require("./../stores/GameStore");
var StartGame = require("./StartGame.jsx");

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
    return (
      <div>
        <StartGame gameInProgress={gameInProgress} />
      </div>
    );
  },
  _onChange: function() {
    this.setState(GameStore.getGameState());
  }

});

module.exports = Main;
