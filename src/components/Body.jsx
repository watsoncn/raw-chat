import React, { Component } from "react";
import Bootstrap from "react-bootstrap";
import Connect from "./Connect";
import Chat from "./Chat";
import styles from "../app.sass";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connected: false
    };
  }
  render() {
    const connectOrChat = !this.state.connected ? <Connect /> : <Chat />;
    return <div>{connectOrChat}</div>;
  }
}

export default Body;
