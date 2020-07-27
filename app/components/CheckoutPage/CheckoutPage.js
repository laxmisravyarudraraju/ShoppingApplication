import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

import CheckoutPageStyles from "./styles";
import CheckoutPageList from "../CheckoutPageList/CheckoutPageList";

const useStyles = makeStyles(CheckoutPageStyles);

export const CheckoutPage = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CheckoutPageList />
      <div className={classes.buttonWrapper}>
        <Button color="primary" variant="outlined" className={classes.button}>
          Checkout
        </Button>
      </div>
    </React.Fragment>
  );
};
