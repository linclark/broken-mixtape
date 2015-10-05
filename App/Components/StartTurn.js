"use strict";

let React = require("react-native");

let {
  Component,
  PropTypes,
  Text,
  TouchableHighlight
} = React;

class StartTurn extends Component {
  render() {
    let {startTurn} = this.props;
    return (
      <TouchableHighlight onPress={startTurn}>
        <Text>Start Turn</Text>
      </TouchableHighlight>
    );
  }
};

StartTurn.propTypes = {
  startTurn: PropTypes.func.isRequired
}

module.exports = StartTurn;
