import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

import { Category } from "../Category/Category";

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
    opacity: 0.8,
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
  },
  title: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 100,
    color: "#ccc",
    // background: "#aaa",
    opacity: 0.7,
    // padding: "5px 10px",
    borderRadius: "3px",
    textTransform: "capitalise",
    letterSpacing: "1px",
  },
}));

export const CategoryList = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={6} className={classes.item}>
          <div className={classes.container}>
            <div className={classes.wrapper}></div>
            <div className={classes.title}>
              <Typography variant="h6">Men's</Typography>
            </div>
            <Category img="/static/img/men.webp" alt="Men" />
          </div>
        </Grid>
        <Grid item xs={6} className={classes.item}>
          <div className={classes.container}>
            <div className={classes.wrapper}></div>
            <div className={classes.title}>
              <Typography variant="h6">Women's</Typography>
            </div>
            <Category img="/static/img/women.jpg" alt="Women" />
          </div>
        </Grid>
        <Grid item xs={4} className={classes.item}>
          <div className={classes.container}>
            <div className={classes.wrapper}></div>
            <div className={classes.title}>
              <Typography variant="h6">Bags</Typography>
            </div>
            <Category img="/static/img/bags.jpg" alt="Bags" />
          </div>
        </Grid>
        <Grid item xs={4} className={classes.item}>
          <div className={classes.container}>
            <div className={classes.wrapper}></div>
            <div className={classes.title}>
              <Typography variant="h6">Jackets</Typography>
            </div>
            <Category img="/static/img/jackets.jpg" alt="Jackets" />
          </div>
        </Grid>
        <Grid item xs={4} className={classes.item}>
          <div className={classes.container}>
            <div className={classes.wrapper}></div>
            <div className={classes.title}>
              <Typography variant="h6">Watches</Typography>
            </div>
            <Category img="/static/img/watches.jpg" alt="Accessories" />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
