import React, { Component } from 'react';


class Circle extends Component {

  constructor(props) {
    super()
    window.setInterval(() => {
      this.setState({
        rotation: this.state.rotation + props.hz / 200
      })
    }, 25)
  }

  state = {
    rotation: 0
  }

  render() {

    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          border: '1px solid lightgray',
          transform: `rotate(${this.state.rotation + 45}deg)`,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 25,
            height: 25,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(255, 165, 0, 0.5)',
            border: '1px solid orange',
          }}
        ></div>
      </div>
    );
  }
}


export default Circle;
