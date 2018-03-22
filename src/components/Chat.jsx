import React, { Component } from "react";
import Bootstrap from "react-bootstrap";
import styles from "../app.sass";

class Chat extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Welcome to the chat room</h1>
        <h3>Waiting for another person to connect</h3>
      </div>
    );
  }
}

export default Chat;
