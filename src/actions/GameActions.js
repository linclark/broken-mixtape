"use strict";

var GameConstants = require("./../constants/GameConstants");
var GameDispatcher = require("./../dispatcher/GameDispatcher");

var GameActions = {
  startGame: function() {
    GameDispatcher.handleViewAction({
      actionType: GameConstants.START_GAME
    });
  }
};

module.exports = GameActions;
