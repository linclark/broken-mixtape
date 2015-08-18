"use strict";

var GameConstants = require("./../constants/GameConstants");
var GameDispatcher = require("./../dispatcher/GameDispatcher");
var assign = require("object-assign");
var EventEmitter = require("events").EventEmitter;

var CHANGE_EVENT = "change";

var _gameInProgress = false;

function _startGame() {
  _gameInProgress = true;
}

var GameStore = assign(EventEmitter.prototype, {
  /**
   * Get the current state.
   * @return {object}
   */
  getGameState: function() {
    return {
      gameInProgress: _gameInProgress,
      currentTeam: 1,
      score: {
        team1: 1,
        team2: 1
      }
    };
  },
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
  dispatcherIndex: GameDispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.actionType) {
      case GameConstants.START_GAME:
        _startGame();
        break;
    }

    GameStore.emitChange();

    return true;
  })
});

module.exports = GameStore;
