import React, { Component } from 'react';
import './App.css';
import Tone from './Tone'
import Circle from './Circle'


const tones = [140, 220]

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
            position: 'absolute',
            width: 424.264,
            height: 424.264,
            outline: '1px solid lightblue',
            border: '3px solid lightblue',
            backgroundColor: 'rgba(173, 216, 230, 0.2)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '100vw',
              height: 1,
              position: 'absolute',
              backgroundColor: 'black',
              top: '75%',
            }}
          ></div>
          <div
            style={{
              height: '100vh',
              width: 1,
              position: 'absolute',
              backgroundColor: 'black',
              left: '50%',
            }}
          ></div>
          <div
            style={{
              border: '2px dashed lightgray',
              position: 'absolute',
              backgroundColor: 'white',
              width: 300,
              height: 300,
            }}
          >
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
        </div>
      </div>
    );
  }
}

export default App;
