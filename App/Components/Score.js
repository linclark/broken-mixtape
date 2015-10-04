"use strict";

let React = require("react-native");

let {Text, View} = React;

class Score extends React.Component{
  render() {
    return (
      <View>
        <Text>{this.props.score.team1}</Text>
        <Text>{this.props.score.team2}</Text>
      </View>
    );
  }
};

Score.propTypes = {
  score: React.PropTypes.shape({
    team1: React.PropTypes.number.isRequired,
    team2: React.PropTypes.number.isRequired
  }).isRequired
} 

module.exports = Score;
