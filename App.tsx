/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import {Provider} from 'react-redux';

import {createStore, applyMiddleware} from 'redux';

import ReduxThunk from 'redux-thunk';
import Router from './src/Router';

import store from './src/redux/store';

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
