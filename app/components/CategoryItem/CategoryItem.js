import React from "react";

import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, IconButton, Button } from "@material-ui/core";
import FavoriteOutlined from "@material-ui/icons/FavoriteBorderRounded";

import CategoryItemStyles from "./styles";

import { addItemToCart, deleteItemFromCart } from "./../../Redux/Cart/Actions";

const useStyles = makeStyles(CategoryItemStyles);

const styles = {
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  button: {
    fontSize: "12px",
  },
};

const CategoryItem = ({
  item,
  cartItems,
  addItemToCart,
  deleteItemFromCart,
}) => {
  const classes = useStyles();
  const { price, name, imageUrl } = item;

  return (
    <React.Fragment>
      <div className={classes.container}>
        <div className={classes.wrapper}></div>
        <div className={classes.title}>
          <Typography variant="subtitle1">{name}</Typography>
        </div>
        <img src={imageUrl} alt={name} style={styles.img} />
        {cartItems.includes(item) ? (
          <Button
            onClick={() =>
              deleteItemFromCart(
                cartItems.findIndex((cartItem) => cartItem.id === item.id)
              )
            }
            variant="outlined"
            color="inherit"
            className={classes.priceBox}
          >
            ADDED TO CART
          </Button>
        ) : (
          <Button
            onClick={() => addItemToCart(item)}
            variant="outlined"
            color="inherit"
            className={classes.priceBox}
          >
            SHOP AT ${price}
          </Button>
        )}
        <div className={classes.buttonContainer}>
          <IconButton color="inherit">
            <FavoriteOutlined />
          </IconButton>
        </div>
      </div>
    </React.Fragment>
  );
};

const getState = (state) => ({
  cartItems: state.cart.cartItems,
});

const dispatchAction = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItemToCart(item)),
  deleteItemFromCart: (index) => dispatch(deleteItemFromCart(index)),
});

export default connect(getState, dispatchAction)(CategoryItem);
