import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Homepage } from "./components/Homepage/Homepage";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Homepage />
      </React.Fragment>
    );
  }
}

export default App;
