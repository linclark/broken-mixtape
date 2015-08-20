"use strict";

var React = require("react");
var StartTurn = require("./StartTurn");
var Countdown = require("react-countdown-clock");
var GameActions = require("./../actions/GameActions");

var Turn = React.createClass({
  propTypes: {
    currentTeam: React.PropTypes.string.isRequired,
    turnInProgress: React.PropTypes.bool.isRequired,
    score: React.PropTypes.shape({
      team1: React.PropTypes.number.isRequired,
      team2: React.PropTypes.number.isRequired
    }).isRequired
  },
  render: function() {
    return (
      <div>
        {this.props.turnInProgress ? <Countdown seconds={1} color="#000" alpha={0.9} size={300} onComplete={GameActions.loseTurn} /> : <StartTurn />}
        <div>{this.props.score.team1}</div>
        <div>{this.props.score.team2}</div>
      </div>
    );
  }
});

module.exports = Turn;
