import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, IconButton, Button } from "@material-ui/core";
import FavoriteOutlined from "@material-ui/icons/FavoriteBorderRounded";

import CategoryItemStyles from "./styles";

const useStyles = makeStyles(CategoryItemStyles);

const styles = {
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  button: {
    fontSize: "12px",
  },
};

export const CategoryItem = ({ name, imageUrl, price }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.wrapper}></div>
        <div className={classes.title}>
          <Typography variant="subtitle1">{name}</Typography>
        </div>
        <img src={imageUrl} alt={name} style={styles.img} />
        <Button variant="outlined" color="inherit" className={classes.priceBox}>
          SHOP AT ${price}
        </Button>
        <div className={classes.buttonContainer}>
          <IconButton color="inherit">
            <FavoriteOutlined />
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};
