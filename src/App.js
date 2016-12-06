import React, { Component } from 'react';
import './App.css';
import Tone from './Tone'
import Circle from './Circle'


const invasion = [
  45,
  46,
  47,
  48,
  49,
  50,
]

const cChord = [
  261.63, // C
  329.63, // E
  392.00 // G
]

const major = (root) => ([
  root,
  root * 1.26,
  root * 1.498
])


const tones = [35, 36, 45, 46]

class App extends Component {

  render() {
    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            border: '3px solid lightblue',
            borderRadius: '50%',
            width: 424.264,
            height: 424.264,
            position: 'absolute',
          }}
        ></div>
        {
          tones.map((tone, i) => {
            return (
              <div
                key={i}
              >
                <Tone
                  hz={tone}
                />
                <Circle
                  hz={tone}
                />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
