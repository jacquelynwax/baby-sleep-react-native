import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, View, ActivityIndicator, AlertIOS, Vibration } from 'react-native'


class DetectMotion extends Component {
  constructor(props) {
    super(props)
    this.state = {lastEvent: {}, startTime: '', soundOccurences: 0, motionOccurences: 0}
    this.fetchDataFromNest = this.fetchDataFromNest.bind(this)
  }

  fetchDataFromNest () {
    console.log('We are in the fetch!')
    fetch('https://developer-api.nest.com/devices/cameras/6TGLXwquGkUKgCg_rQkMOOyoEx77d6jouencUQEjs8fXBNZdT7bMRw.json?auth=c.et5cYZHaUMqw06LjKNJVRrGhZgY3d5pShZQIb7XLT5JUiuTnY8NoDPjybTEd1Z4pIZGxep76gKtU5LGKK703JCMJGGsgJ95OfjKxsiC7UjIoaCBRYj3tjqrneAuvSyZANcoFWdDFXQcNolmm', {
      method: "GET",
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({lastEvent: responseJson.last_event})
      // this.state.startTime === '' && this.setState({ startTime: responseJson.last_event.start_time})
    })
    .then(() => {
      let lastEvent = this.state.lastEvent
      console.log('!!!!!secondIfStatement', (lastEvent.start_time === this.state.startTime))
      if (lastEvent.has_motion && lastEvent.has_sound) {
        if (lastEvent.start_time === this.state.startTime) this.setState({ soundOccurences: this.state.soundOccurences + 1, motionOccurences: this.state.motionOccurences + 1 })
        else if (this.state.startTime === '' || lastEvent.start_time !== this.state.startTime) this.setState({ startTime: lastEvent.start_time, soundOccurences: 1, motionOccurences: 1 })
      }
      console.log('!!!!!this.state', this.state)
    })
    .catch(err => console.log(err))
  }

  componentDidMount() {
    console.log('!!!!!!!this.state on component mount', this.state)
    this.intervalId = setInterval(this.fetchDataFromNest.bind(this), 6000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  render() {
    const { lastEvent, soundOccurences, motionOccurences } = this.state

    return (
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundContainer} source={require('./assets/stars.jpg')}>
        {
          (lastEvent && soundOccurences > 2 && motionOccurences > 2) ?
          AlertIOS.alert('Sound and motion detected!') :
          <View>
            <Text style={styles.textContainer}>Listening now for sound and motion. You can close this app. We have this under control. Sweet dreams!</Text>
            <ActivityIndicator size="large" color="#ffffff" />
          </View>
        }
        </ImageBackground>
      </View>
    )
  }
}

module.exports = DetectMotion;

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
  textContainer: {
    backgroundColor: (0, 0, 0, 0),
    color: '#FFFFFF',
    fontSize: 20,
    padding: 15
  }
});
