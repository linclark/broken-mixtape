"use strict";

let React = require("react-native");

let {
  Component,
  PropTypes,
  Text,
  TouchableHighlight
} = React;

let Actions = require("./../actions");

class WinTurn extends Component {
  render() {
    let {winTurn} = this.props;
    return (
      <TouchableHighlight onPress={winTurn}>
        <Text>Got it!</Text>
      </TouchableHighlight>
    );
  }
}

WinTurn.propTypes = {
  winTurn: PropTypes.func.isRequired
}

module.exports = WinTurn;
