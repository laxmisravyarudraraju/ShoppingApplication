import React from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button } from "@material-ui/core";

import LoginPageStyles from "./../LoginPage/styles";
import { signInWithGoogle, auth } from "../../firebase/firebase.config";

const useStyles = makeStyles(LoginPageStyles);

export const Login = (props) => {
  const classes = useStyles();

  const initialValues = {
    email: "",
    password: "",
  };

  const [LoginInfo, setLoginInfo] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = LoginInfo;
    await auth.signInWithEmailAndPassword(email, password);
    setLoginInfo(initialValues);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setLoginInfo((LoginInfo) => ({ ...LoginInfo, [name]: value }));
  };

  return (
    <React.Fragment>
      <Typography className={classes.formTitle} variant="subtitle2">
        I already have an account
      </Typography>
      <Typography className={classes.formTitle} variant="subtitle2">
        Sign In with your email and password
      </Typography>
      <form onSubmit={handleSubmit} autoComplete="off" className={classes.form}>
        <TextField
          id="standard-basic email"
          name="email"
          label="Email"
          type="email"
          className={classes.formInput}
          required
          onChange={handleChange}
        />
        <TextField
          id="standard-basic password"
          name="password"
          label="Password"
          type="password"
          className={classes.formInput}
          required
          onChange={handleChange}
        />
        <div className={classes.buttonContainer}>
          <Button color="primary" variant="outlined" type="submit">
            login
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={signInWithGoogle}
          >
            Sign in with google
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};
