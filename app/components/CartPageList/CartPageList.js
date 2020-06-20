import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core";

import CartPageListStyles from "./styles";

import CartPageItem from "./../CartPageItem/CartPageItem";

const useStyles = makeStyles(CartPageListStyles);

const CartPageList = (props) => {
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
          <CartPageItem />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartPageList;
