import React from "react";

import { Route, Switch } from "react-router-dom";

import { Container } from "@material-ui/core";

import { Header } from "./components/Header/Header";
import { Homepage } from "./components/Homepage/Homepage";
import { Shoppage } from "./components/Shoppage/Shoppage";

class App extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shoppage} />
        </Switch>
      </Container>
    );
  }
}

export default App;
