import React, { Component } from "react";
import Bootstrap from "react-bootstrap";
import Connect from "./Connect";
import Chat from "./Chat";
import styles from "../app.sass";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedIn: false,
      userFirst: "John",
      userSecond: null
    };
  }

  handleUserConnect = user => {
    // TODO: REFACTOR WITH TERNARY
    if (!this.state.userFirst) {
      this.setState({
        checkedIn: true,
        userFirst: user
      });
    } else if (!this.state.userSecond) {
      this.setState({
        checkedIn: true,
        userSecond: user
      });
    } else {
      alert("Chat room busy. Please check later.");
    }
  };

  render() {
    const connectOrChat = !this.state.checkedIn ? (
      <Connect signin={this.handleUserConnect} />
    ) : (
      <Chat
        userOne={this.state.userFirst}
        userTwo={this.state.userSecond}
        checkedIn={this.state.checkedIn}
      />
    );
    return <div>{connectOrChat}</div>;
  }
}

export default Body;
