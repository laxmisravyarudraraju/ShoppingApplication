import React from "react";

import { Route, Switch } from "react-router-dom";

import { Homepage } from "./components/Homepage/Homepage";

const Hats = () => {
  return <h1>Hats</h1>;
};

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={Hats} />
      </React.Fragment>
    );
  }
}

export default App;
