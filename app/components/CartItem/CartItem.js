import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
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
          src={props.imageUrl}
          alt={props.title}
        />
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography
            variant="subtitle2"
            style={{ textTransform: "uppercase" }}
          >
            {props.title}
          </Typography>
        }
        secondary={
          <Typography variant="subtitle2">2 &times; {props.price}</Typography>
        }
      ></ListItemText>
    </React.Fragment>
  );
};

export default CartItem;
