import { CartActionTypes } from "./ActionTypes";

export const addItemToCart = (item) => ({
  type: CartActionTypes.addItemToCart,
  payload: item,
});

export const deleteItemFromCart = (index) => ({
  type: CartActionTypes.deleteItemFromCart,
  payload: index,
});

export const increaseByOne = (count) => ({
  type: CartActionTypes.increaseByOne,
  payload: count++,
});

export const decreaseByOne = (count) => ({
  type: CartActionTypes.decreaseByOne,
  payload: count--,
});
