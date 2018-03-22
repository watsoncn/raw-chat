import React, { Component } from "react";
import Bootstrap from "react-bootstrap";
import styles from "../app.sass";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Raw Chat</h1>
        <hr />
      </div>
    );
  }
}

export default Header;
