"use strict"

let React = require("react-native");

let {
  Component,
  PropTypes,
  Text,
  View
} = React;

let format = num => num < 10 ? "0"+num : num;

class ReactNativeGameClock extends Component {
  constructor(props) {
    super(props);

    let {callback, seconds} = this.props;
    callback = callback !== undefined ? callback : function() {};

    this._endTime = new Date(new Date().getTime() + seconds * 1000);
    this.state = {
      secondsLeft: seconds,
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
    let {style} = this.props;
    let {secondsLeft} = this.state;
    return (
      <View style={style}>
        <View><Text>{format(secondsLeft)}</Text></View>
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

ReactNativeGameClock.propTypes = {
  callback: PropTypes.func,
  seconds: PropTypes.number.isRequired
}

module.exports = ReactNativeGameClock;
