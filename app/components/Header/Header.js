import React from "react";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";

import LocalMallRoundedIcon from "@material-ui/icons/LocalMallRounded";

import { auth } from "../../firebase/firebase.config";

import HeaderStyles from "./styles";

const useStyles = makeStyles((theme) => HeaderStyles);

export const Header = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.appbar} position="static">
        <Toolbar className={classes.headerNavBox}>
          <Link className="link" to="/">
            <Typography variant="subtitle1" className={classes.title}>
              Shopify
            </Typography>
          </Link>
          <div className={classes.headerNav}>
            <Link className="link" to="/shop">
              <IconButton className={classes.button}>
                <LocalMallRoundedIcon />
              </IconButton>
            </Link>
            <Link className="link" to="/contact">
              <Button className={classes.button} style={{ fontWeight: 600 }}>
                Contact
              </Button>
            </Link>
            {props.currentUser ? (
              <Link className="link" to="/">
                <Button
                  className={classes.button}
                  color="primary"
                  variant="outlined"
                  style={{ fontWeight: 600 }}
                  onClick={() => auth.signOut()}
                >
                  Logout
                </Button>
              </Link>
            ) : (
              <Link className="link" to="/login">
                <Button
                  className={classes.button}
                  color="primary"
                  variant="outlined"
                  style={{ fontWeight: 600 }}
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
