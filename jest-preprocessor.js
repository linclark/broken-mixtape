"use strict";

var babelJest = require("babel-jest");

module.exports = {
  process: function(src, filename) {
    if (filename.match(/\.(css|gif)$/)) {
      return "";
    }
    return babelJest.process(src, filename);
  }
};
