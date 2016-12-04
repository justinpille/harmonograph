import { Component } from 'react';


const context = new (window.AudioContext || window.webkitAudioContext)()

const start = (type = 'sine', hz = 440, oscillator) => {
  oscillator.type = type
  oscillator.frequency.value = hz
  oscillator.connect(context.destination)
  oscillator.start()
}


class Tone extends Component {

  oscillator = context.createOscillator();

  render() {

    const {
      type,
      hz,
    } = this.props

    start(type, hz, this.oscillator)

    return null
  }
}

export default Tone;
