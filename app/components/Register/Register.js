import React from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button } from "@material-ui/core";

import { auth, createUserProfile } from "./../../firebase/firebase.config";

import LoginPageStyles from "./../LoginPage/styles";

const useStyles = makeStyles(LoginPageStyles);

export const Register = (props) => {
  const classes = useStyles();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [SignUpInfo, setSignUpInfo] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = SignUpInfo;
    if (password !== confirmPassword) {
      alert("passwords do not match");
      console.log("passwords dont match");
      return;
    }
    try {
      const { userAuth } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(userAuth, { name });
      setSignUpInfo(initialValues);
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setSignUpInfo((SignUpInfo) => ({ ...SignUpInfo, [name]: value }));
  };

  return (
    <React.Fragment>
      <Typography className={classes.formTitle} variant="subtitle2">
        I Don't have an account
      </Typography>
      <Typography className={classes.formTitle} variant="subtitle2">
        Sign Up with your email and password
      </Typography>
      <form onSubmit={handleSubmit} autoComplete="off" className={classes.form}>
        <TextField
          id="standard-basic name"
          name="name"
          label="Name"
          type="text"
          className={classes.formInput}
          required
          onChange={handleChange}
        />
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
        <TextField
          id="standard-basic confirmPassword"
          name="confirmPassword"
          label="Re-enter Password"
          type="password"
          className={classes.formInput}
          required
          onChange={handleChange}
        />
        <div className={classes.buttonContainer}>
          <Button color="inherit" variant="outlined" type="submit">
            Register
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};
