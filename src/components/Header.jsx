import React, { Component } from "react";
import Bootstrap from "react-bootstrap";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="header">Raw Chat</div>
        <hr />
      </div>
    );
  }
}

export default Header;
