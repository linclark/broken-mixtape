
'use strict';

jest.setMock('NativeModules', require('./NativeModules'));

let ReactNative = require('react-native');

module.exports = ReactNative;
