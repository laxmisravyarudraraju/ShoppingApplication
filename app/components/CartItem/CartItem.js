import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  MenuItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";

import CartItemStyles from "./styles";

const useStyles = makeStyles(CartItemStyles);

const CartItem = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ListItemAvatar>
        <Avatar
          className={classes.avatar}
          variant="square"
          src="https://i.ibb.co/QdJwgmp/brown-cowboy.png"
          alt=""
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography
            variant="subtitle2"
            style={{ textTransform: "uppercase" }}
          >
            Brown Cowboy
          </Typography>
        }
        secondary={<Typography variant="subtitle2">2 &times; $30</Typography>}
      ></ListItemText>
    </React.Fragment>
  );
};

export default CartItem;
