"use strict";

let Constants = require("./../constants");
let Dispatcher = require("./../dispatcher");

let Actions = {
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
