"use strict";

let React = require("react-native");

let {
  Component,
  Text,
  TouchableHighlight
} = React;

class StartTurn extends Component {
  render() {
    return (
      <TouchableHighlight onPress={() => this.props.startTurn()}>
        <Text>Start Turn</Text>
      </TouchableHighlight>
    );
  }
};

module.exports = StartTurn;
