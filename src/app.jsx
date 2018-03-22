import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import "normalize.css";

import "styles/base/_main.sass"; // Global styles
import "styles/base/_common.sass"; // Global styles
import styles from "./app.sass"; // Css-module styles

const App = () => {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
};

export default App;
