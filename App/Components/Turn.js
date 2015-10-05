"use strict";

let React = require("react-native");

let {
  Component,
  PropTypes,
  View
} = React;

let Countdown = require("./Countdown");
let WinTurn = require("./WinTurn");

class Game extends Component {
  render() {
    let {loseTurn, winTurn} = this.props;
    return (
      <View>
        <Countdown seconds={4} callback={loseTurn} />
        <WinTurn winTurn={winTurn} />
      </View>
    );
  }
}

Game.propTypes = {
  loseTurn: PropTypes.func.isRequired,
  winTurn: PropTypes.func.isRequired
}

module.exports = Game;
