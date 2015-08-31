"use strict";

var React = require("react");
var GameActions = require("./../actions/GameActions");

var WinTurn = React.createClass({
  handleSubmit: function() {
    GameActions.winTurn();
  },
  render: function() {
    return (
      <div>
        <button className="win" onClick={this.handleSubmit}>Got it!</button>
      </div>
    );
  }
});

module.exports = WinTurn;
