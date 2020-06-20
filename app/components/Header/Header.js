import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";

import ShopIcon from "@material-ui/icons/LocalMallRounded";

import { auth } from "../../firebase/firebase.config";

import HeaderStyles from "./styles";

import { Cart } from "./../Cart/Cart";

const useStyles = makeStyles((theme) => HeaderStyles);

const Header = (props) => {
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
                <ShopIcon />
              </IconButton>
            </Link>
            <Link className="link" to="/contact">
              <Button className={classes.button} style={{ fontWeight: 600 }}>
                Contact
              </Button>
            </Link>

            {props.currentUser ? (
              <React.Fragment>
                <Button
                  className={classes.button}
                  color="primary"
                  variant="outlined"
                  style={{ fontWeight: 600 }}
                  onClick={() => auth.signOut()}
                >
                  Logout
                </Button>
                <Cart />
              </React.Fragment>
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

const getState = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(getState)(Header);
