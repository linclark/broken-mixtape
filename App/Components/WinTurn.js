"use strict";

let React = require("react-native");

let {
  Component,
  Text,
  TouchableHighlight
} = React;

let Actions = require("./../actions");

class WinTurn extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.winTurn}>
        <Text>Got it!</Text>
      </TouchableHighlight>
    );
  }
}

module.exports = WinTurn;
