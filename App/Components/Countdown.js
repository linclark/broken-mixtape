"use strict"

let React = require("react-native");

let {
  Text,
  View
} = React;

let format = num => num < 10 ? "0"+num : num;

class ReactNativeGameClock extends React.Component {
  constructor(props) {
    super(props);

    let callback = this.props.callback !== undefined ? this.props.callback : function() {};

    this._endTime = new Date(new Date().getTime() + this.props.seconds * 1000);
    this.state = {
      secondsLeft: this.props.seconds,
      callback: callback
    }
  }

  componentWillMount() {
    this._start();
  }

  componentWillUnmount() {
    this._stop();
  }

  render() {
    return (
      <View style={this.props.style}>
        <View><Text>{format(this.state.secondsLeft)}</Text></View>
      </View>
    )
  }

  _start() {
    if(this.interval !== null) {
      clearInterval(this.interval);
    }
    this._update();
    this.interval = setInterval(() => this._update());
  }

  _stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  _update() {
    // Calculate the remaining time
    let secondsLeft = this._endTime.getTime() - new Date().getTime();
    secondsLeft = Math.ceil(secondsLeft / 1000);
    secondsLeft = secondsLeft < 0 ? 0 : secondsLeft;

    if(secondsLeft === 0) {
      this._stop();
      this.state.callback();
    }

    this.setState({secondsLeft: secondsLeft})
  }
};

module.exports = ReactNativeGameClock;
