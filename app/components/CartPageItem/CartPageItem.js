import React from "react";

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

import CartPageItemStyles from "./styles";

const useStyles = makeStyles(CartPageItemStyles);

const CartPageItem = (props) => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell className={classes.tableCell}>
        <Avatar
          className={classes.avatar}
          src={props.imageUrl}
          alt={props.title}
          variant="square"
        ></Avatar>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <Typography className={classes.text} variant="subtitle2">
          {props.title}
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
          $ {props.price}
        </Typography>
      </TableCell>
      <TableCell className={classes.tableCell}>
        <IconButton color="secondary">
          <CloseIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default CartPageItem;
