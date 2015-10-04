"use strict";

let React = require("react-native");

let {Text, TouchableHighlight} = React;

let Actions = require("./../actions");

class WinTurn extends React.Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.winTurn}>
        <Text>Got it!</Text>
      </TouchableHighlight>
    );
  }
}

module.exports = WinTurn;
