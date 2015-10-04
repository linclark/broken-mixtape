let React = require("react-native");

let {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} = React;

let Game = require("./Game")
let StartGame = require("./StartGame")

let Store = require("./../store");

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
  constructor(props) {
    super(props)
    this.state = Store.getState();
  }

  componentDidMount() {
    Store.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    Store.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    let {gameInProgress, ...props} = this.state;
    let currentScreen;

    currentScreen = gameInProgress ? <Game {...props} /> : <StartGame />

    return (
      <View style={styles.container}>
        {currentScreen}
      </View>
    )
  }

  _onChange() {
    this.setState(Store.getState());
    console.log(Store.getState())
  }
};

module.exports = Main;
