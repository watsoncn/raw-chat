import React, { Component } from "react";
import firebase from "firebase.js";
import { Row, Col } from "react-bootstrap";
import styles from "../app.sass";
import loader from "../images/loader.gif";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      message: ""
    };
  }

  handleSendMessage = () => {
    const tempMessageList = this.state.messageList;
    tempMessages.push(this.state.message);
    this.setState({ messageList: tempMessageList });
  };

  render() {
    if (this.props.userTwo) {
      return (
        <div>
          <Row>
            <Col md={8} mdOffset={2}>
              <div id="threadQueue">
                // TODO: Make this a map through the state list of messages:
                <div>(J): Hey Charles!</div>
                // THEN FINISH IMPLEMENTING PUSH TO FIREBASE AND SYNC BACK TO
                STATE
                <div className="form-group">
                  <form onSubmit={this.handleSendMessage}>
                    <input
                      value={this.state.message}
                      onChange={event =>
                        this.setState({ message: event.target.value })
                      }
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Press enter to send..."
                      id="inputLarge"
                      autoFocus
                    />
                    <button type="submit" className="hidden" />
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div>
          <h3 id="waitingHeader">Waiting for another person to connect</h3>
          <img id="loaderImage" alt="Waiting..." src={loader} />
        </div>
      );
    }
  }
}

export default Chat;
