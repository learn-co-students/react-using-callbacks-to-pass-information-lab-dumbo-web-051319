import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      currentColor: "Color String"
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell onCell={this.changeColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  getNewColor = (colorString) => {
    this.setState({currentColor: colorString})
  }

  changeColor = () => {
    return this.state.currentColor
  }


  render() {
    return (
      <div id="app">
        <ColorSelector onColorSelector={this.getNewColor}/>
        <div  id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
