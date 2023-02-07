import React, { Component } from "react";
class LifeCycleB extends Component {
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
    console.log("life cycle B in componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("life cycle method from Should component update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Life cycle A getSnapshotBeforeUpdate");
  }
  render() {
    console.log("Life cycle method in render");
    return (
      <>
        <div>
          <div>Life cycle method </div>
        </div>
      </>
    );
  }
}

export default LifeCycleB;
