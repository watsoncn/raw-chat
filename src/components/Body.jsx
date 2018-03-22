import React, { Component } from "react";
import Bootstrap from "react-bootstrap";
import Connect from "./Connect";
import Chat from "./Chat";
import styles from "../app.sass";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      userFirst: null,
      userSecond: null
    };
  }

  handleUserConnect = user => {
    // TODO: REFACTOR WITH TERNARY
    if (!this.state.userFirst) {
      this.setState({
        connected: true,
        userFirst: user
      });
    } else {
      this.setState({
        connected: true,
        userSecond: user
      });
    }
  };

  render() {
    const connectOrChat = !this.state.connected ? (
      <Connect signin={this.handleUserConnect} />
    ) : (
      <Chat />
    );
    return <div>{connectOrChat}</div>;
  }
}

export default Body;
