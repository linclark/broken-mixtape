let ActionTypes = require("./../constants/ActionTypes");

let initialState = {
  gameInProgress: false,
  turnInProgress: false,
  currentTeam: "a",
  score: {
    "a": 0,
    "b": 0
  }
}

function toggleTeam(team) {
  return team == "a" ? "b" : "a";
}

function reduce(state = initialState, action) {
  let updates = {};

  switch (action.type) {
    case ActionTypes.START_GAME:
      return Object.assign({}, state, {gameInProgress: true});
    case ActionTypes.START_TURN:
      return Object.assign({}, state, {turnInProgress: true});
    case ActionTypes.LOSE_TURN:
      let otherTeam = toggleTeam(state.currentTeam);
      updates = {
        turnInProgress: false,
        currentTeam: otherTeam,
        score: state.score
      }
      updates.score[otherTeam]++;
      return Object.assign({}, state, updates);
    case ActionTypes.WIN_TURN:
      updates = {
        turnInProgress: false,
        score: state.score
      }
      updates.score[state.currentTeam]++;
      return Object.assign({}, state, updates);
    default:
      return state;
  }
}

module.exports = reduce;
