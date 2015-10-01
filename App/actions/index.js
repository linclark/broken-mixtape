"use strict";

var Constants = require("./../constants");
var Dispatcher = require("./../dispatcher");

var Actions = {
  startGame: function() {
    Dispatcher.handleViewAction({
      actionType: Constants.START_GAME
    });
  },
  startTurn: function() {
    Dispatcher.handleViewAction({
      actionType: Constants.START_TURN
    });
  },
  loseTurn: function() {
    Dispatcher.handleViewAction({
      actionType: Constants.LOSE_TURN
    });
  },
  winTurn: function() {
    Dispatcher.handleViewAction({
      actionType: Constants.WIN_TURN
    });
  }
};

module.exports = Actions;
