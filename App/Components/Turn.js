"use strict";

let React = require("react-native");

let {View} = React;

let Countdown = require("./Countdown");
let WinTurn = require("./WinTurn");
let Actions = require("./../actions");

class Game extends React.Component {
  render() {
    let clock =<Countdown seconds={30} callback={Actions.loseTurn} style={{marginTop: -115, marginLeft: 15}}/>

    return (
      <View>
        {clock}
        <WinTurn />
      </View>
    );
  }
}

module.exports = Game;
