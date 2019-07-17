import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }


  render() {
    const handleClick = () => {
      const newColor = this.props.getSelectedColor();
      this.setState({
        color: newColor
      })
    }
    return (
      <div className="cell" onClick={handleClick} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
