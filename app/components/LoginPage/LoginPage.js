import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { Login } from "./../Login/Login";
import { Register } from "./../Register/Register";

import LoginPageStyles from "./styles";

const useStyles = makeStyles(LoginPageStyles);

export const LoginPage = (props) => {
  const classes = useStyles();

  return (
    <Grid container spacing={5} className={classes.root}>
      <Grid item xs={6} className={`${classes.item} ${classes.loginBox}`}>
        <Login />
      </Grid>
      <Grid item xs={6} className={classes.item}>
        <Register />
      </Grid>
    </Grid>
  );
};
