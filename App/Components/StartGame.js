"use strict";

let React = require("react-native");
let {
  Text,
  TouchableHighlight
} = React;

class StartGame extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.startGame}>
        <Text>Start</Text>
      </TouchableHighlight>
    );
  }
}

module.exports = StartGame;
