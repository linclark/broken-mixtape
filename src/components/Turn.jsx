"use strict";

var React = require("react");
var Countdown = require("react-countdown-clock");
var WinTurn = require("./WinTurn");
var GameActions = require("./../actions/GameActions");

var Game = React.createClass({
  render: function() {
    // If canvas is installed, then Jest should be able to test this component
    // without error. However, canvas depends on nan 1.x which doesn't support
    // io.js 3.x. because blarg (https://github.com/Automattic/node-canvas/pull/580).
    // Instead, check for canvas and don't show the clock if necessary.
    var clock = !!document.createElement('canvas').getContext ? <Countdown seconds={1} color="#000" alpha={0.9} size={300} onComplete={GameActions.loseTurn} /> : ""

    return (
      <div>
        {clock}
        <WinTurn />
      </div>
    );
  }
});

module.exports = Game;
