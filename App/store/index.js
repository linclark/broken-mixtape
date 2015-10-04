"use strict";

let Constants = require("./../constants");
let Dispatcher = require("./../dispatcher");
let assign = require("object-assign");
let EventEmitter = require("events").EventEmitter;

let CHANGE_EVENT = "change";

let _gameInProgress = false;
let _turnInProgress = false;
let _currentTeam = 1;
let _score = {
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
  console.log("test")
  _turnInProgress = false;
  _addPoint();
}

function _toggleTeam() {
  _currentTeam = _currentTeam == 1 ? 2 : 1;
}

function _addPoint() {
  _score["team" + _currentTeam]++;
}

let Store = assign(EventEmitter.prototype, {
  /**
   * Get the current state.
   * @return {object}
   */
  getState: function() {
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
  dispatcherIndex: Dispatcher.register(function(payload) {
    let action = payload.action;
    switch (action.actionType) {
      case Constants.START_GAME:
        _startGame();
        break;

      case Constants.START_TURN:
        _startTurn();
        break;

      case Constants.LOSE_TURN:
        _loseTurn();
        break;

      case Constants.WIN_TURN:
        _winTurn();
        break;
    }

    Store.emitChange();

    return true;
  })
});

module.exports = Store;
