"use strict";

let React = require("react-native");
let {
  AppRegistry,
  StyleSheet,
  Text,
  View
} = React;

let Main = require("./App/Components/Main")

class BrokenMixtape extends React.Component{
  render() {
    var name = "test"
    return (
      <Main />
    );
  }
};

AppRegistry.registerComponent("BrokenMixtape", () => BrokenMixtape);
