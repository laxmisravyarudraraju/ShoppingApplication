import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, IconButton, Button } from "@material-ui/core";
import FavoriteOutlined from "@material-ui/icons/FavoriteBorderRounded";

import CategoryItemStyles from "./styles";

const useStyles = makeStyles(CategoryItemStyles);

const styles = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

export const CategoryItem = ({ name, imgUrl }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.wrapper}></div>
        <div className={classes.title}>
          <Typography variant="h6">{name}</Typography>
        </div>
        <img src={imgUrl} alt={name} style={styles} />
        <div className={classes.buttonContainer}>
          <IconButton color="secondary">
            <FavoriteOutlined />
          </IconButton>
          <Button variant="outlined" color="secondary">
            Add to Cart
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
