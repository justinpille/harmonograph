import React, { Component } from 'react';
import './App.css';
import Tone from './Tone'
import Circle from './Circle'


class App extends Component {

  state = {
    tones: [
      261.626,
      329.628,
      391.995,
    ]
  }

  render() {
    return (
      <div
        className="App"
      >
        {
          this.state.tones.map((tone, i) => {
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
