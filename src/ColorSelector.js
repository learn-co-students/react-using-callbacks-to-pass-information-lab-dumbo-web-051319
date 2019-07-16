import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: str}}/>
    })
  )

  selectColor = (event) => {
    this.props.onColorSelector(event.target.style.backgroundColor)
  }

  render() {
    return (
      <div onClick={this.selectColor} id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
