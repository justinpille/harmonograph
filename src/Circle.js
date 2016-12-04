import React, { Component } from 'react';


class Circle extends Component {

  constructor(props) {
    super()
    window.setInterval(() => {
      this.setState({
        pct: this.state.pct + props.hz / 100
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
          width: 100,
          height: 100,
          border: '3px solid blue',
          transform: `rotate(${this.state.pct}deg)`,
        }}
      ></div>
    );
  }
}


export default Circle;
