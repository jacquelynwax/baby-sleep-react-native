import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = { camera: {} }
  }

  componentDidMount () {
    fetch('https://developer-api.nest.com/devices/cameras/D2qIq8SXQWLkDV8mPnFrPwt--KXGUwB_Z9BbC7iJiO4LK220RAopgQ.json?auth=c.vG2CTmrCTauzhnprLZiHM4tpcLTi0zjQ2TL6ecaJzuGuFKwSxOiE50TwcBL1TwMSK32sJxXjAYtj5QnNM2qLF3CsbmdpUa8DLt2XyWwMqpPGkfO7h9vf3xD46hESsjEnoYK3qLqXW9oZTDIw', {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({camera: responseJson})
    })
    .catch(err => console.log(err))
  }

  render() {
    const lastEvent = this.state.camera.last_event

    return (
      <View style={styles.container}>
        <Text>Sleep While Baby Sleeps is an iOS application that triggers the iPhone’s built in alarm based on noise and motion detected by a Nest baby-monitoring camera – so that caregivers can sleep as long as baby does, without spending a restless night next to a monitor.</Text>
        {
          lastEvent && lastEvent.has_motion && lastEvent.has_sound && <Text>Sound and motion have been detected!</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
