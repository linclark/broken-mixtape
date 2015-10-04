"use strict";

let React = require("react-native");

let {Text, TouchableHighlight} = React;

let Actions = require("./../actions");

class WinTurn extends React.Component {
  handleSubmit() {
    Actions.winTurn();
  }

  render() {
    return (
      <TouchableHighlight onPress={this.handleSubmit}><Text>Got it!</Text></TouchableHighlight>
    );
  }
}

module.exports = WinTurn;
