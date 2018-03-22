import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./app";
import Header from "./components/Header";
import Body from "./components/Body";
import Connect from "./components/Connect";
import Chat from "./components/Chat";

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/header" component={Header} />
      <Route exact path="/body" component={Body} />
      <Route exact path="/connect" component={Connect} />
      <Route exact path="/chat" component={Chat} />
    </div>
  </Router>
);

export default Routes;
