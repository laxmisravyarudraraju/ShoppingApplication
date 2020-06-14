import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";

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
          <Button color="inherit" style={{ fontWeight: 600 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
