import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ParentName: "Parent component msg",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  //ChildParent is child parameter name
  greetParent(ChildParamter) {
    //alert("Hello" + this.state.ParentName);
    //other way to write concatenation es6 feature
    alert(`Hello ${this.state.ParentName} from ${ChildParamter}`)
  }
  render() {
    return (
      <>
        <div>
            {/* event binding */}
            <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
      </>
    );
  }
}

export default ParentComponent;
