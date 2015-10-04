"use strict";

let ActionTypes = require("./../constants/ActionTypes");

let Actions = {
  startGame: function() {
    return { type: ActionTypes.START_GAME }
  },
  startTurn: function() {
    return { type: ActionTypes.START_TURN }
  },
  loseTurn: function() {
    return { type: ActionTypes.LOSE_TURN }
  },
  winTurn: function() {
    return { type: ActionTypes.WIN_TURN }
  }
};

module.exports = Actions;
