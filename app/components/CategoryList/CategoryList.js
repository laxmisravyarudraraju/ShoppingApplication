import React from "react";
import { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import { Category } from "../Category/Category";
import CategoryListStyles from "./styles";
import CategoryListData from "./CategoryListData";

const useStyles = makeStyles((theme) => CategoryListStyles);

export const CategoryList = (props) => {
  const [categories, setCategories] = useState(CategoryListData);

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={0} className={classes.root}>
        {categories.map((data) => (
          <Grid key={data.id} item xs={data.col} className={classes.item}>
            <div className={classes.container}>
              <div className={classes.wrapper}></div>
              <div className={classes.title}>
                <Typography variant="h6">{data.title}</Typography>
              </div>
              <Category img={data.img} alt="Men" />
            </div>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
