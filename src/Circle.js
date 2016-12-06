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
          position: 'relative',
          width: 300,
          height: 300,
          border: '1px solid lightgray',
          transform: `rotate(${this.state.rotation}deg)`,
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
            backgroundColor: 'orange',
          }}
        ></div>
      </div>
    );
  }
}


export default Circle;
