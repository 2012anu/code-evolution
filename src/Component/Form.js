import React, { Component } from "react";
import "./compcss.css";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comments: "",
      options: "",
    };
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };
  handleOptionChange = (event) => {
    this.setState({
      options: event.target.value,
    });
  };

  handleSubmitChange = (event) => {
    alert(
      `${this.state.username} ${this.state.comments} ${this.state.options}`
    );
    // we use this event.preventDefault(); in order to keep the data without vainishing after alert
    event.preventDefault();
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmitChange} className="form">
          <div>
            <label>User name: </label>
            <input
              type="text"
              value={this.state.username}
              //   we need to put event handler in order to take input
              onChange={this.handleUsernameChange}
            ></input>
          </div>

          <div>
            <label>Comments</label>
            {/* <input type="text" value={this.state.comments} onChange={this.handleCommentsChange}></input> */}
            <textarea
              type="text"
              value={this.state.comments}
              onChange={this.handleCommentsChange}
            ></textarea>
          </div>
          <div>
            <label>Topic</label>
            <select
              value={this.state.options}
              onChange={this.handleOptionChange}
            >
              <option value="react">React js</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
          </div>
          <div>
            <button  type="submit">Submit</button>
          </div>
 
        </form>
      </>
    );
  }
}

export default Form;
