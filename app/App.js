import React from "react";

import { Route, Switch } from "react-router-dom";

import { Homepage } from "./components/Homepage/Homepage";
import { Shoppage } from "./components/Shoppage/Shoppage";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shoppage} />
      </React.Fragment>
    );
  }
}

export default App;
