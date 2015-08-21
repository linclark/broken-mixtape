"use strict";

var React = require("react");
var Score = require("./Score/Score.jsx");
var StartTurn = require("./StartTurn");
var Turn = require("./Turn");

var Game = React.createClass({
  propTypes: {
    currentTeam: React.PropTypes.string.isRequired,
    turnInProgress: React.PropTypes.bool.isRequired
  },
  render: function() {
    return (
      <div>
        {this.props.turnInProgress ? <Turn /> : <StartTurn />}
        <Score score={this.props.score}/>
      </div>
    );
  }
});

module.exports = Game;
