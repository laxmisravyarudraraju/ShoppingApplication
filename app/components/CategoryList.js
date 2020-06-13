import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

import { Category } from "./Category";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  item: {
    height: "50vh",
  },
  container: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
  },
  wrapper: {
    backgroundColor: "#000",
    opacity: 0.5,
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
  },
}));

export const CategoryList = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={4} className={classes.item}>
          <div className={classes.container}>
            <div className={classes.wrapper}></div>
            <Category img="/static/img/jackets.jpg" alt="Jackets" />
          </div>
        </Grid>
        <Grid item xs={4} className={classes.item}>
          <div className={classes.container}>
            <div className={classes.wrapper}></div>
            <Category img="/static/img/bags.jpg" alt="Bags" />
          </div>
        </Grid>
        <Grid item xs={4} className={classes.item}>
          <div className={classes.container}>
            <div className={classes.wrapper}></div>
            <Category img="/static/img/watches.jpg" alt="Accessories" />
          </div>
        </Grid>
        <Grid item xs={4} className={classes.item}>
          <div className={classes.container}>
            <div className={classes.wrapper}></div>
            <Category img="/static/img/men.webp" alt="Men" />
          </div>
        </Grid>
        <Grid item xs={8} className={classes.item}>
          <div className={classes.container}>
            <div className={classes.wrapper}></div>
            <Category img="/static/img/women.jpg" alt="Women" />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
