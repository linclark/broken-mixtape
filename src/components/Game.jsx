"use strict";

var React = require("react");
var StartTurn = require("./StartTurn");
var Turn = require("./Turn");

var Game = React.createClass({
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
        {this.props.turnInProgress ? <Turn /> : <StartTurn />}
        <div>{this.props.score.team1}</div>
        <div>{this.props.score.team2}</div>
      </div>
    );
  }
});

module.exports = Game;
