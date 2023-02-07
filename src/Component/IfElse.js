import React, { Component } from "react";

export class IfElse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //gives logged in!
      isLoggedIn: true,
      //not logged in
      //isLoggedIn: false,
    };
  }

  render() {
    // if(this.state.isLoggedIn)
    // return (<>
    // <div>Hello we logged in!</div>
    // </>)
    // else
    // return(<>
    // <div> hello we have not logged in!</div>
    // </>)

    //2nd  method

    // let msg;
    // if (this.state.isLoggedIn) {
    //   msg = <div>Page is logged in!</div>;
    // } else {
    //   msg = <div>Page is not logged in!</div>;
    // }
    // return <>{msg}</>;

    //3rd method
    // return this.state.isLoggedIn ? (
    //   <div> logged In </div>
    // ) : (
    //   <div> Not Logged in!</div>
    // );

    //4th method
    return this.state.isLoggedIn && <div>Is logged in!!!</div>
  }
}

export default IfElse;
