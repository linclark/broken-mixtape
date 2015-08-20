"use strict";

var GameConstants = require("./../constants/GameConstants");
var GameDispatcher = require("./../dispatcher/GameDispatcher");
var assign = require("object-assign");
var EventEmitter = require("events").EventEmitter;

var CHANGE_EVENT = "change";

var _gameInProgress = false;
var _turnInProgress = false;
var _currentTeam = 1;
var _score = {
  team1: 0,
  team2: 0
};

function _startGame() {
  _gameInProgress = true;
}

function _startTurn() {
  _turnInProgress = true;
}

function _loseTurn() {
  _turnInProgress = false;
  _toggleTeam();
  _addPoint();
}

function _winTurn() {
  _turnInProgress = false;
  _addPoint();
}

function _toggleTeam() {
  _currentTeam = _currentTeam == 1 ? 2 : 1;
}

function _addPoint() {
  _score["team" + _currentTeam]++;
}

var GameStore = assign(EventEmitter.prototype, {
  /**
   * Get the current state.
   * @return {object}
   */
  getGameState: function() {
    return {
      gameInProgress: _gameInProgress,
      turnInProgress: _turnInProgress,
      currentTeam: _currentTeam,
      score: _score
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

      case GameConstants.START_TURN:
        _startTurn();
        break;

      case GameConstants.LOSE_TURN:
        _loseTurn();
        break;

      case GameConstants.WIN_TURN:
        _winTurn();
        break;
    }

    GameStore.emitChange();

    return true;
  })
});

module.exports = GameStore;
