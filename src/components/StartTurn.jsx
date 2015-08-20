"use strict";

var React = require("react");
var GameActions = require("./../actions/GameActions");

var StartGame = React.createClass({
  handleSubmit: function() {
    GameActions.startTurn();
  },
  render: function() {
    return (
      <div>
        <button onClick={this.handleSubmit}>Start Turn</button>
      </div>
    );
  }
});

module.exports = StartGame;
