import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import CategoryStyles from "./styles";

const useStyles = makeStyles(CategoryStyles);

const styles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export const Category = ({ title, img }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.wrapper}></div>
        <div className={classes.title}>
          <Typography variant="h6">{title}</Typography>
        </div>
        <img src={img} alt={title} style={styles} />
      </div>
    </React.Fragment>
  );
};
