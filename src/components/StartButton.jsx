"use strict";

var React = require("react");
var GameActions = require("./../actions/GameActions");

var StartButton = React.createClass({
  propTypes: {
    gameInProgress: React.PropTypes.bool
  },
  handleSubmit: function() {
    GameActions.startGame();
  },
  render: function() {
    return (
      <div>
        {this.props.gameInProgress ? null : <button onClick={this.handleSubmit}>Start</button>}
      </div>
    );
  }
});

module.exports = StartButton;
