let React = require("react-native");
let Redux = require("redux");
let ReactRedux = require("react-redux/native");
let Actions = require("./../actions");

let {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = React;

let Game = require("./../Components/Game")
let StartGame = require("./../Components/StartGame")

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
  render() {
    let {startGame, ...actions} = Redux.bindActionCreators(Actions, this.props.dispatch);
    let {gameInProgress, ...props} = this.props.gameState;
    let currentScreen = gameInProgress ? <Game actions={actions} {...props} /> : <StartGame startGame={startGame} />

    return (
      <View style={styles.container}>
        {currentScreen}
      </View>
    )
  }
};

function select(state) {
  return state;
}

module.exports = ReactRedux.connect(select)(Main);
