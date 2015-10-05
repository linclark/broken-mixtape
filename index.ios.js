"use strict";

let React = require("react-native");
let {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} = React;

let Main = require("./App/containers/Root")

class BrokenMixtape extends Component{
  render() {
    return (
      <Main />
    );
  }
};

AppRegistry.registerComponent("BrokenMixtape", () => BrokenMixtape);
