import React from "react";

import { connect } from "react-redux";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Button,
  Menu,
  IconButton,
  MenuItem,
  Typography,
} from "@material-ui/core";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";

import CartStyles from "./styles";

import CartItem from "./../CartItem/CartItem";

const useStyles = makeStyles(CartStyles);

const Cart = ({ cartItems }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <React.Fragment>
      <IconButton
        aria-controls="simple-menu"
        onClick={handleClick}
        className={classes.button}
      >
        <ShoppingCartIcon />
        <span
          style={{
            fontSize: "14px",
          }}
        >
          {cartItems.reduce((acc, cur) => acc + cur.quantity, 0)}
        </span>
      </IconButton>
      <Menu
        className={classes.menu}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {cartItems.length > 0 ? (
          <div>
            <div className={classes.buttonWrapper}>
              <Link className="link" to="/cart">
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                >
                  Go to checkout
                </Button>
              </Link>
            </div>
            {cartItems.map((item) => (
              <MenuItem key={item.id} className={classes.item}>
                <CartItem quantity={item.quantity} cartItem={item} />
              </MenuItem>
            ))}
          </div>
        ) : (
          <div>
            <Typography className={classes.text} variant="subtitle2">
              Your cart is empty
            </Typography>
            <div className={classes.buttonWrapper}>
              <Link className="link" to="/shop">
                <Button
                  className={classes.button}
                  variant="outlined"
                  color="primary"
                >
                  Shop here
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Menu>
    </React.Fragment>
  );
};

const getState = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(getState)(Cart);
