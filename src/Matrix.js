import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  state = {
  selected_color:'#FFF'
  }


setSelectedColor = (newColor) => {
  this.setState({
    selected_color: newColor
  });
}

  getSelectedColor(){
    this.state.changeSelectedColor
}

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} setSelectedColor={this.setSelectedColor} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
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
