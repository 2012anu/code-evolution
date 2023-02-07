import React, { Component } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Anusha",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Anusha",
      });
    }, 2000);
  }
  render() {
    return (
      <>
        <div>ParentComp</div>
        <PureComp name={this.state.name}></PureComp>
        <RegComp name={this.state.name}></RegComp>
      </>
    );
  }
}

export default ParentComp;
