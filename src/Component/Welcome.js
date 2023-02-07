import React, { Component } from "react";

class Welcome extends Component {
  //class compoent we use this.props for props

  render() {
   console.log(this.props)
    return (
      <>
        {/* <div>Welcome to Class component</div> */}

        <h3>Props concept in class component</h3>
        <p> Welcome {this.props.name1}</p>
      </>
    );
  }
}
export default Welcome;
