let React = require("react-native");
let Redux = require("redux");
let ReactRedux = require("react-redux/native");
let Main = require("./Main");

let {Provider} = ReactRedux;

let reducer = require("./../reducers")

let store = Redux.createStore(reducer);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        {() => <Main />}
      </Provider>
    )
  }
}

module.exports = Root;
