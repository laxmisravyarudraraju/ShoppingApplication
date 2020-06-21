import React from "react";

import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import {
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";

import CartItemStyles from "./styles";

const useStyles = makeStyles(CartItemStyles);

const CartItem = ({ cartItem }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <ListItemAvatar>
        <Avatar
          className={classes.avatar}
          variant="square"
          src={cartItem.imageUrl}
          alt={cartItem.name}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography
            variant="subtitle2"
            style={{ textTransform: "uppercase" }}
          >
            {cartItem.name}
          </Typography>
        }
        secondary={
          <Typography variant="subtitle2">
            2 &times; ${cartItem.price}
          </Typography>
        }
      ></ListItemText>
    </React.Fragment>
  );
};

export default CartItem;
