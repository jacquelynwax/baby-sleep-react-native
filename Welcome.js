import React from 'react'
import { StyleSheet, Text, ImageBackground, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Button from 'react-native-button'
import DetectMotion from './DetectMotion.js'

export default class App extends React.Component {
  constructor (props) {
    super (props)
  }

  render() {
    return (
      <ImageBackground style={styles.backgroundContainer} source={require('./assets/stars.jpg')}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.headerContainer}>Sleep While Baby Sleeps</Text>
            <Text style={styles.subtextContainer}>Sleep While Baby Sleep sends you alerts when your Nest baby monitoring camera delects certain levels of noise and motion – so that you can sleep as long as baby does, without spending a restless night next to a monitor.</Text>
          </View>
          <Button style={{fontSize: 20, backgroundColor: '#5bc0de', color: 'white', height: 40, width: 260, padding: 8, overflow: 'hidden', borderRadius: 4}} onPress={() => { Actions.detect() }}>Get Started</Button>
        </View>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  alltextContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'baseline'
  },
  headerContainer: {
    backgroundColor: (0, 0, 0, 0),
    color: '#FFFFFF',
    fontSize: 30,
    position: 'relative',
    padding: 15
  },
  subtextContainer: {
    backgroundColor: (0, 0, 0, 0),
    color: '#FFFFFF',
    fontSize: 20,
    paddingLeft: 15,
    paddingBottom: 50
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});
