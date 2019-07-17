import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.keepTrack = this.keepTrack.bind(this)
    this.changeColor = this.changeColor.bind(this)
    this.state = {
      selectedColor: ""
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} change={this.changeColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  keepTrack = (event) => {
    const color =  event.target.style.backgroundColor
    this.setState({
      selectedColor: color
    })
  }

  changeColor = (event) => {
    event.target.style.backgroundColor = this.state.selectedColor
  }

  render() {
    return (
      <div id="app">
        <ColorSelector track={this.keepTrack}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
