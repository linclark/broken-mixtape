let React = require("react-native");

let {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = React;

let StartGame = require("./StartGame")

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class Main extends React.Component {
  handleSubmit() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Test the Main</Text>
        <StartGame />
      </View>
    )
  }
};

module.exports = Main;
