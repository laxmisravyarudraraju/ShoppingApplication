import React from "react";

import { Route, Switch } from "react-router-dom";

import { Container } from "@material-ui/core";

import { Header } from "./components/Header/Header";
import { Homepage } from "./components/Homepage/Homepage";
import { ShopPage } from "./components/ShopPage/ShopPage";
import { LoginPage } from "./components/LoginPage/LoginPage";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/login" component={LoginPage} />
        </Switch>
      </Container>
    );
  }
}

export default App;
