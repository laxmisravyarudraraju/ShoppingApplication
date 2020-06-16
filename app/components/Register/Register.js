import React from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button } from "@material-ui/core";

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

  const [SignUpinfo, setSignUpInfo] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignUpInfo(initialValues);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setSignUpInfo({ [name]: value });
  };

  return (
    <React.Fragment>
      <Typography className={classes.formTitle} variant="subtitle2">
        I Don't have an account
      </Typography>
      <Typography className={classes.formTitle} variant="subtitle2">
        Sign Up with your email and password
      </Typography>
      <form onSubmit={handleChange} autoComplete="off" className={classes.form}>
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
