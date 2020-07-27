import React from "react";

import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Typography,
} from "@material-ui/core";

import CheckoutPageListStyles from "./styles";

import CheckoutPageItem from "../CheckoutPageItem/CheckoutPageItem";

const useStyles = makeStyles(CheckoutPageListStyles);

const CheckoutPageList = ({ cartItems }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Product</TableCell>
            <TableCell className={classes.tableCell}>Description</TableCell>
            <TableCell className={classes.tableCell}>Quantity</TableCell>
            <TableCell className={classes.tableCell}>Price</TableCell>
            <TableCell className={classes.tableCell}>Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CheckoutPageItem
                key={item.id}
                quantity={item.quantity}
                cartItem={item}
              />
            ))
          ) : (
            <div className={classes.noItemsContainer}>
              <Typography variant="subtitle2">No Items in your cart</Typography>
            </div>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const getState = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(getState)(CheckoutPageList);
