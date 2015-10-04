"use strict";

var React = require("react-native");

let {View} = React;

var Countdown = require("./Countdown");
var WinTurn = require("./WinTurn");
var Actions = require("./../actions");

var Game = React.createClass({
  render: function() {
    // If canvas is installed, then Jest should be able to test this component
    // without error. However, canvas depends on nan 1.x which doesn't support
    // io.js 3.x. because blarg (https://github.com/Automattic/node-canvas/pull/580).
    // Instead, check for canvas and don't show the clock if necessary.
    var clock =<Countdown seconds={30} callback={Actions.loseTurn} style={{marginTop: -115, marginLeft: 15}}/>

    return (
      <View>
        {clock}
        <WinTurn />
      </View>
    );
  }
});

module.exports = Game;
