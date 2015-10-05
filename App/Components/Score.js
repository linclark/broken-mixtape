"use strict";

let React = require("react-native");

let {
  Component,
  PropTypes,
  Text,
  View
} = React;

class Score extends Component{
  render() {
    let {score} = this.props;
    return (
      <View>
        <Text>{score.a}</Text>
        <Text>{score.b}</Text>
      </View>
    );
  }
};

Score.propTypes = {
  score: PropTypes.shape({
    "a": PropTypes.number.isRequired,
    "b": PropTypes.number.isRequired
  }).isRequired
}

module.exports = Score;
