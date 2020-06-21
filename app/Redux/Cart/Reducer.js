import { CartActionTypes } from "./ActionTypes";

const INITIAL_STATE = {
  cartItems: [],
};

export default (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.addItemToCart:
      return {
        cartItems: [...prevState.cartItems, action.payload],
      };
    case CartActionTypes.deleteItemFromCart:
      const cartItems = [...prevState.cartItems];
      cartItems.splice(action.payload, 1);
      return {
        cartItems,
      };
    case CartActionTypes.increaseByOne:
      return {};
    case CartActionTypes.decreaseByOne:
      return {};
    default:
      return prevState;
  }
};
