"use strict";

let React = require("react-native");

let {View} = React;

let Score = require("./Score");
let StartTurn = require("./StartTurn");
let Turn = require("./Turn");

class Game extends React.Component{
  render() {
    let {startTurn, ...actions} = this.props.actions;
    return (
      <View>
        {this.props.turnInProgress ? <Turn {...actions} /> : <StartTurn startTurn={startTurn} />}
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
