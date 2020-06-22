import React from "react";
import { useState, useEffect } from "react";

import { connect } from "react-redux";

import { Route, Switch, Redirect } from "react-router-dom";

import { Container } from "@material-ui/core";

import { auth, createUserProfile, firestore } from "./firebase/firebase.config";
import Header from "./components/Header/Header";
import { Homepage } from "./components/Homepage/Homepage";
import { ShopPage } from "./components/ShopPage/ShopPage";
import { LoginPage } from "./components/LoginPage/LoginPage";
import { CheckoutPage } from "./components/CheckoutPage/CheckoutPage";

import { setCurrentUser } from "./Redux/Users/Actions";

import "./styles.css";

const App = ({ currentUser, setCurrentUser }) => {
  // const [currentUser, setCurrentUser] = useState({ id: "" });

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
        return;
      }
      setCurrentUser(userAuth);
    });

    return unsubscribeFromAuth;
  }, []);

  return (
    <Container maxWidth="lg">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/login"
          render={() => (currentUser ? <Redirect to="/" /> : <LoginPage />)}
        />
        <Route path="/cart" component={CheckoutPage} />
      </Switch>
    </Container>
  );
};

const getState = (state) => ({
  currentUser: state.user.currentUser,
});

const dispatchAction = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(getState, dispatchAction)(App);
