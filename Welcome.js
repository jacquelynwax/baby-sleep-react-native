import React from 'react'
import { StyleSheet, Text, ImageBackground, View, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import DetectMotion from './DetectMotion.js'

export default class App extends React.Component {
  constructor (props) {
    super (props)
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundContainer} source={require('./assets/stars.jpg')}>
          <View style={styles.layoutContainer}>
            <Text style={styles.headerContainer}>Sleep While Baby Sleeps</Text>
            <Text style={styles.textContainer}>Sleep While Baby Sleep sends you alerts when your Nest baby monitoring camera delects certain levels of noise and motion – so that you can sleep as long as baby does, without spending a restless night next to a monitor.</Text>
              <Button
                onPress={() => {
                  Actions.detect()
                }}
                title="Get Started"
              />
          </View>
        </ImageBackground>
      </View>
    );
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
    justifyContent: 'center'
  },
  layoutContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  headerContainer: {
    opacity: .7,
    alignContent: 'center',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontSize: 30,
    paddingTop: 50
  },
  textContainer: {
    opacity: .7,
    alignContent: 'center',
    backgroundColor: '#000000',
    color: '#FFFFFF',
    fontSize: 20,
    paddingRight: 15,
    paddingLeft: 15
  }
});
