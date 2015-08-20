"use strict";

var React = require("react");
var Countdown = require("react-countdown-clock");
var WinTurn = require("./WinTurn");
var GameActions = require("./../actions/GameActions");

var Game = React.createClass({
  render: function() {
    return (
      <div>
        <Countdown seconds={1} color="#000" alpha={0.9} size={300} onComplete={GameActions.loseTurn} />
        <WinTurn />
      </div>
    );
  }
});

module.exports = Game;
