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

import HeaderStyles from "./styles";

const useStyles = makeStyles((theme) => HeaderStyles);

export const Header = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Typography variant="subtitle1" className={classes.title}>
            Shopify
          </Typography>
          <IconButton className={classes.button}>
            <LocalMallRoundedIcon />
          </IconButton>
          <Button className={classes.button} style={{ fontWeight: 600 }}>
            Contact
          </Button>
          <Button
            className={classes.button}
            color="secondary"
            variant="outlined"
            style={{ fontWeight: 600 }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
