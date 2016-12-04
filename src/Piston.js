import React, { Component } from 'react';


class Piston extends Component {

  constructor(props) {
    super()
    window.setInterval(() => {
      this.setState({
        pct: this.state.pct + 1
      })
    }, 50)
  }

  state = {
    pct: 0
  }

  render() {

    return (
      <div
        style={{
          position: 'absolute',
          width: 25,
          height: 25,
          borderRadius: '50%',
          left: `${this.state.pct}%`,
          backgroundColor: 'blue',
        }}
      ></div>
    );
  }
}


export default Piston;
