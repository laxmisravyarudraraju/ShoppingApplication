import React from "react";
import { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

import { Container } from "@material-ui/core";

import { auth } from "./firebase/firebase.config";
import { Header } from "./components/Header/Header";
import { Homepage } from "./components/Homepage/Homepage";
import { ShopPage } from "./components/ShopPage/ShopPage";
import { LoginPage } from "./components/LoginPage/LoginPage";

import "./styles.css";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribeFromAuth;
  });

  return (
    <Container maxWidth="lg">
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Container>
  );
};

export default App;
