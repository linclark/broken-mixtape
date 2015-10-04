"use strict";

let Dispatcher = require("flux").Dispatcher;
let assign = require("object-assign");

let GameDispatcher = assign(new Dispatcher, {
  handleViewAction: function(action) {
    this.dispatch({
      source: "VIEW_ACTION",
      action: action
    });
  }
});

module.exports = GameDispatcher;
