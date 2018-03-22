import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Body from "./components/Body";
import Styles from "./styles";

const App = () => {
  return (
    <div className="App">
      <Grid>
        <Row>
          <Col md={8} mdOffset={2}>
            <Header />
            <Body />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default App;
