"use strict";

let React = require("react-native");
let {
  Component,
  Text,
  TouchableHighlight
} = React;

class StartGame extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.startGame}>
        <Text>Start</Text>
      </TouchableHighlight>
    );
  }
}

module.exports = StartGame;
