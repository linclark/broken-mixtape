"use strict";

jest.dontMock("object-assign");
jest.autoMockOff();

describe("WinTurn", function() {
  it("updates score for win", function() {
    var React = require("react/addons");
    var Main = require("./../src/components/Main");
    var TestUtils = React.addons.TestUtils;

    var game = TestUtils.renderIntoDocument(
      <Main />
    );

    var startGamebutton = TestUtils.findRenderedDOMComponentWithClass(game, "start-game");
    TestUtils.Simulate.click(startGamebutton);

    var startTurnbutton = TestUtils.findRenderedDOMComponentWithClass(game, "start-turn");
    TestUtils.Simulate.click(startTurnbutton);

    var button = TestUtils.findRenderedDOMComponentWithClass(game, "win");
    TestUtils.Simulate.click(button);

    var score = TestUtils.findRenderedDOMComponentWithClass(game, "team1-score");
    expect(score.getDOMNode().textContent).toEqual("1");
  });
});
