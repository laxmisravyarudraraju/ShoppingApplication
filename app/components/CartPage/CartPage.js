import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import CartPageStyles from "./styles";
import CartPageList from "./../CartPageList/CartPageList";

const useStyles = makeStyles(CartPageStyles);

export const CartPage = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CartPageList />
      <div className={classes.buttonWrapper}>
        <Button color="primary" variant="outlined" className={classes.button}>
          Checkout
        </Button>
      </div>
    </React.Fragment>
  );
};
