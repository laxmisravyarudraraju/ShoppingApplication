import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#d18888",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textTransform: "uppercase",
    fontWeight: 600,
    letterSpacing: "1px",
  },
}));

export const Header = (props) => {
<<<<<<< HEAD
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
=======
  return (
    <React.Fragment>
      <div>Hello from Header file</div>
>>>>>>> category
    </React.Fragment>
  );
};
