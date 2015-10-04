"use strict";

let React = require("react-native");

let {Text, TouchableHighlight} = React;

class StartTurn extends React.Component{
  render() {
    return (
      <TouchableHighlight onPress={() => this.props.startTurn()}>
        <Text>Start Turn</Text>
      </TouchableHighlight>
    );
  }
};

module.exports = StartTurn;
