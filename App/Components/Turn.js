"use strict";

let React = require("react-native");

let {View} = React;

let Countdown = require("./Countdown");
let WinTurn = require("./WinTurn");
let Actions = require("./../actions");

class Game extends React.Component {
  render() {
    return (
      <View>
        <Countdown seconds={30} callback={Actions.loseTurn} />
        <WinTurn />
      </View>
    );
  }
}

module.exports = Game;
