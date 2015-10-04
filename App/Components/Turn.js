"use strict";

let React = require("react-native");

let {View} = React;

let Countdown = require("./Countdown");
let WinTurn = require("./WinTurn");

class Game extends React.Component {
  render() {
    return (
      <View>
        <Countdown seconds={4} callback={this.props.loseTurn} />
        <WinTurn winTurn={this.props.winTurn} />
      </View>
    );
  }
}

module.exports = Game;
