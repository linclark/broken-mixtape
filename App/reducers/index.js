let Redux = require("redux");
let gameState = require("./gameState");

let rootReducer = Redux.combineReducers({
  gameState
});

module.exports = rootReducer;
