"use strict";

let React = require("react-native");

let {
  Component,
  Text,
  View
} = React;

class Score extends Component{
  render() {
    return (
      <View>
        <Text>{this.props.score.a}</Text>
        <Text>{this.props.score.b}</Text>
      </View>
    );
  }
};

Score.propTypes = {
  score: React.PropTypes.shape({
    "a": React.PropTypes.number.isRequired,
    "b": React.PropTypes.number.isRequired
  }).isRequired
}

module.exports = Score;
