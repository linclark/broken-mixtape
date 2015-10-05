"use strict";

let React = require("react-native");
let {
  Component,
  PropTypes,
  Text,
  TouchableHighlight
} = React;

class StartGame extends Component {
  render() {
    let {startGame} = this.props;
    return (
      <TouchableHighlight onPress={startGame}>
        <Text>Start</Text>
      </TouchableHighlight>
    );
  }
}

StartGame.propTypes = {
  startGame: PropTypes.func.isRequired
}

module.exports = StartGame;
