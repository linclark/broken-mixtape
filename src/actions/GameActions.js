"use strict";

var GameConstants = require("./../constants/GameConstants");
var GameDispatcher = require("./../dispatcher/GameDispatcher");

var GameActions = {
  startGame: function() {
    GameDispatcher.handleViewAction({
      actionType: GameConstants.START_GAME
    });
  },
  startTurn: function() {
    GameDispatcher.handleViewAction({
      actionType: GameConstants.START_TURN
    });
  },
  loseTurn: function() {
    GameDispatcher.handleViewAction({
      actionType: GameConstants.LOSE_TURN
    });
  },
  winTurn: function() {
    GameDispatcher.handleViewAction({
      actionType: GameConstants.WIN_TURN
    });
  }
};

module.exports = GameActions;
