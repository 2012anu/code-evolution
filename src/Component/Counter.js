import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  increment() {
    //this would not render the count increment in website so this reason why we use setState
    // this.state.count = this.state.count +1
    //  console.log(this.state.count)


    /*
    this.setState(
      {
        count: this.state.count + 1, //this state value paramter
      },
      () => {
        console.log("call back value", this.state.count); //this is callback value parameter
      }
    );
    //in console this starts increment from 0 but not 1
    console.log(this.state.count);
  
*/

//instead of above state function we write code like this
   
//in this we use  previous state so it increment like 5 10 15 20 instead  1 2 3
this.setState((prevState) => (
    {
      count : prevState.count +1  
    }
),
 () => {console.log(" call back", this.state.count)}
)

}

   incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
   }
  render() {
    return (
      <>
        <div>Counter {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </>
    );
  }
}

export default Counter;
