import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      msg: "Welcome Visiter",
    };
  }

  changeMessage() {
    this.setState({
      msg: "Thank you for subscribe",
    });
  }

  render() {
    return (
      <>
        <h3>Welcome class component'using state'</h3>
        <p>{this.state.msg}</p>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </>
    );
  }
}
export default Message;

// import React from "react";
// //ran is other name for props refernece name
// const Message = () => {

//     return <>

//     </>
// }

// export default Message;
