import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  changeColor = () => {
    let newColor = this.state.color
    newColor = this.props.onCell()
    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <div onClick={this.changeColor} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
