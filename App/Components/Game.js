"use strict";

let React = require("react-native");

let {
  Component,
  PropTypes,
  View
} = React;

let Score = require("./Score");
let StartTurn = require("./StartTurn");
let Turn = require("./Turn");

class Game extends Component {
  render() {
    let {score, turnInProgress} = this.props;
    let {startTurn, ...actions} = this.props.actions;
    return (
      <View>
        {turnInProgress ? <Turn {...actions} /> : <StartTurn startTurn={startTurn} />}
        <Score score={score}/>
      </View>
    );
  }
};

Game.propTypes = {
  actions: PropTypes.object.isRequired,
  score: PropTypes.object.isRequired,
  turnInProgress: PropTypes.bool.isRequired
}

module.exports = Game;
