import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((colorStr, idx) => {
      return <div key={idx} className="color-swatch" style={{backgroundColor: colorStr}} onClick={ ()=>this.props.setColor(colorStr)}/>
    })
  )



  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
