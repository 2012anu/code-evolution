import React, { Component } from "react";
import "./compcss.css";
class RefsComp extends Component {
  constructor(props) {
    super(props);
    this.refname = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // this.refname.current.focus();
    // console.log(this.refname);

    if(this.cbRef) {
        this.cbRef.focus();
        console.log(this.setCbRef.value)
    }
    //console.log(this.cbRef.value)
  }
 

  clickHandler = () => {
    alert(this.refname.current.value);
   
  };
  render() {
    return (
      <>
        <label>1st method</label>
        <input type="text" ref={this.refname} />
        <label>call back method</label>
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </>
    );
  }
}

export default RefsComp;
