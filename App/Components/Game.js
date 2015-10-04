"use strict";

let React = require("react-native");

let {View} = React;

let Score = require("./Score");
let StartTurn = require("./StartTurn");
let Turn = require("./Turn");

class Game extends React.Component{
  render() {
    return (
      <View>
        {this.props.turnInProgress ? <Turn /> : <StartTurn />}
        <Score score={this.props.score}/>
      </View>
    );
  }
};

Game.propTypes = {
  currentTeam: React.PropTypes.number.isRequired,
  turnInProgress: React.PropTypes.bool.isRequired
}

module.exports = Game;
