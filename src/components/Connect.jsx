import React, { Component } from "react";
import {
  Row,
  Col,
  FormGroup,
  InputGroup,
  Button,
  FormControl
} from "react-bootstrap";
import styles from "../app.sass";

class Connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  handleSubmitUserName = event => {
    event.preventDefault();
    this.props.signin(this.state.user);
    this.setState({ user: "" });
  };

  render() {
    return (
      <div>
        <h3 className="connectCopy">Welcome, let's connect!</h3>
        <Row id="userCreate">
          <Col md={6} mdOffset={3}>
            <div className="form-group">
              <form onSubmit={this.handleSubmitUserName}>
                <input
                  value={this.state.user}
                  onChange={event =>
                    this.setState({ user: event.target.value })
                  }
                  className="form-control form-control-lg"
                  type="text"
                  placeholder="Press enter to submit..."
                  id="inputLarge"
                  autoFocus
                />
                <button type="submit" className="hidden" />
              </form>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Connect;
