"use strict";

let React = require("react-native");

let {Text, TouchableHighlight} = React;

let Actions = require("./../actions");

class StartTurn extends React.Component{
  handleSubmit() {
    Actions.startTurn();
  }

  render() {
    return (
      <TouchableHighlight className="start-turn" onPress={this.handleSubmit}><Text>Start Turn</Text></TouchableHighlight>
    );
  }
};

module.exports = StartTurn;
