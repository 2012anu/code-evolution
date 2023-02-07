import React, { Component } from "react";
import LifeCycleB from "./LifeCycle-B";
class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "life cycle method in constructor",
    };
    console.log(this.state.name);
  }
  static getDerivedStateFromProps(props, state) {
    console.log("life cycle method in getDerivedStateFromProps ");
    return null;
  }
  componentDidMount() {
    console.log("life cycle in componentDidMount");
  }
// update cycle
  shouldComponentUpdate() {
    console.log("life cycle method from Should component update");
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("Life cycle A getSnapshotBeforeUpdate")
  }

  changeState = () =>
  {
    this.setState ({
      name: 'CHANAGED NAME IS HERE'
    })
  }
  render() {
    console.log("Life cycle method in render");
    return (<>
    <div>
        <div>Life cycle method </div>
        <button onClick={this.changeState}>Change the state</button>
        <LifeCycleB></LifeCycleB>
    </div>
    
    </>)
  }
}

export default LifeCycle

