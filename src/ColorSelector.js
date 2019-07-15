import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {

      const selectColor = () => {
        // console.log(str)
        this.props.setColor(str)
      }
      return <div key={idx} className="color-swatch" onClick={selectColor} style={{backgroundColor: str}}/>
    })
  )

  // handleClick = (event) => {
  //   const color = event.target.style.backgroundColor
  //   return color
  //   return this.props.selectedColor
  // }

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
