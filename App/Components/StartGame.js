"use strict";

let React = require("react-native");
let {
  Text,
  TouchableHighlight
} = React;

let Actions = require("./../actions");

class StartGame extends React.Component {
  handleSubmit () {
    Actions.startGame();
  }

  render () {
    return (
      <TouchableHighlight onPress={this.handleSubmit}><Text>Start</Text></TouchableHighlight>
    );
  }
}

module.exports = StartGame;
