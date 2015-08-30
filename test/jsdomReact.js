"use strict";

var ExecutionEnvironment = require("react/lib/ExecutionEnvironment");
var jsdom = require("mocha-jsdom");

module.exports = function jsdomReact() {
  jsdom();
  ExecutionEnvironment.canUseDOM = true;
};
