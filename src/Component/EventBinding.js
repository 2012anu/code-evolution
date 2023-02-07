import React, { Component } from 'react'

export class EventBinding extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        msg: 'Event before binding'
     }

     // event binding 3rd method
    //  this.ClickEvent = this.ClickEvent.bind(this)

    }
  //  for 1st two method we can use this
   ClickEvent() {
    this.setState({
        msg: 'event after binding'
    })
   // console.log(this)
    }
   
// 4th method class state binding
// ClickEvent = () => {
//     this.setState ({
//         msg: "after binding"
//     })
// }
  render() {
    return (
      <>
      <div>{this.state.msg}</div>
      {/* 1st method */}
      <button onClick={this.ClickEvent.bind(this)}> Click for Event Binding</button>
      {/* 2nd method arrow method */}
      {/* <button onClick={() => this.ClickEvent()}>Click event bind</button> */}
      {/* 3rd method and react offical methos */}
      {/* for 4th method its same way here */}
      {/* <button onClick={this.ClickEvent}>Click event bind</button> */}
      </>
    )
  }
}

export default EventBinding