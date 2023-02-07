import React, { Component } from 'react'
import './compcss.css';

export class ClickClass extends Component {
    ClickHandler() {
        console.log("button clicked in class")
    }
  render() {
    return (
        <button className='Click' onClick={this.ClickHandler}>Click in class component</button>
    )
  }
}

export default ClickClass