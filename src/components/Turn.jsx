"use strict";

var React = require("react");

var Turn = React.createClass({
  propTypes: {
    currentTeam: React.PropTypes.string.isRequired,
    score: React.PropTypes.shape({
      team1: React.PropTypes.number.isRequired,
      team2: React.PropTypes.number.isRequired
    }).isRequired
  },
  render: function() {
    return (
      <div>
        <div>{this.props.score.team1}</div>
        <div>{this.props.score.team2}</div>
      </div>
    );
  }
});

module.exports = Turn;
