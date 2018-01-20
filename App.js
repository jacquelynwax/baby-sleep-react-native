import React, { Component } from 'react'
import { StyleSheet, Text, ImageBackground, View, Button, AlertIOS, NavigatorIOS } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import Welcome from './Welcome.js'
import DetectMotion from './DetectMotion.js'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='welcome' component={ Welcome } title='Welcome' initial />
          <Scene key='detect' component={ DetectMotion } title='Detect Motion' />
        </Scene>
      </Router>
    );
  }
}
