"use strict";

var React = require("react");
var styles = require("./styles.css");
var image = require("./carlton.gif");

var Score = React.createClass({
  propTypes: {
    score: React.PropTypes.shape({
      team1: React.PropTypes.number.isRequired,
      team2: React.PropTypes.number.isRequired
    }).isRequired
  },
  render: function() {
    return (
      <div className={styles.score}>
        <div>{this.props.score.team1}</div>
        <img src={image} />
        <div>{this.props.score.team2}</div>
      </div>
    );
  }
});

module.exports = Score;
