"use strict";

// Unfortunately the renderer in TestUtils doesn't work with React Native.
let React = require("react");
let TestUtils = require("react-addons-test-utils");
jest.dontMock("./../App/Components/Score");
let Score = require("./../App/Components/Score");

describe("Score", function() {
    let props = {
      score: {
        a: 9,
        b: 2
      }
    }

  let element = (<Score {...props} />);
  let renderOutput;

  beforeEach( () => {
    let shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(element);
    renderOutput = shallowRenderer.getRenderOutput();
  });

  it('renders as expected', () => {
    expect(renderOutput.props.children.length).toEqual(2);
    expect(renderOutput.props.children[0].type.displayName).toEqual('Text');
    expect(renderOutput.props.children[0].props.children).toEqual(9);
    expect(renderOutput.props.children[1].props.children).toEqual(2);
  });
})
