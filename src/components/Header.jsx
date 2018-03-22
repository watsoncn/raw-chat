import React, { Component } from "react";
import Bootstrap from "react-bootstrap";
import Styles from "../styles.js";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className={Styles.header}>Raw Chat</h1>
        <hr />
      </div>
    );
  }
}

export default Header;
