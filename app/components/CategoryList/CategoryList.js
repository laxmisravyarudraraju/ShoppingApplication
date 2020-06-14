import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

import { Category } from "../Category/Category";
import CategoryListStyles from "./styles";

const useStyles = makeStyles((theme) => CategoryListStyles);

export const CategoryList = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={1} className={classes.root}>
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
