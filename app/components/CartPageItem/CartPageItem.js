import React from "react";

import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import {
  TableRow,
  TableCell,
  Typography,
  Avatar,
  IconButton,
} from "@material-ui/core";

import ArrowLeft from "@material-ui/icons/ChevronLeftRounded";
import ArrowRight from "@material-ui/icons/ChevronRightRounded";
import CloseIcon from "@material-ui/icons/CloseRounded";

import { deleteItemFromCart } from "./../../Redux/Cart/Actions";

import CartPageItemStyles from "./styles";

const useStyles = makeStyles(CartPageItemStyles);

const CartPageItem = ({ cartItem, deleteItemFromCart, cartItems }) => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell className={classes.tableCell}>
        <Avatar
          className={classes.avatar}
          src={cartItem.imageUrl}
          alt={cartItem.name}
          variant="square"
        ></Avatar>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Typography className={classes.text} variant="subtitle2">
          {cartItem.name}
        </Typography>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <div className={classes.quantityBox}>
          <IconButton color="primary">
            <ArrowLeft />
          </IconButton>
          <Typography>6</Typography>
          <IconButton color="primary">
            <ArrowRight />
          </IconButton>
        </div>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Typography className={classes.text} variant="subtitle1">
          $ {cartItem.price}
        </Typography>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <IconButton
          onClick={() =>
            deleteItemFromCart(
              cartItems.findIndex((item) => item.id === cartItem.id)
            )
          }
          color="secondary"
        >
          <CloseIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

const getState = (state) => ({
  cartItems: state.cart.cartItems,
});

const dispatchAction = (dispatch) => ({
  deleteItemFromCart: (index) => dispatch(deleteItemFromCart(index)),
});

export default connect(getState, dispatchAction)(CartPageItem);
