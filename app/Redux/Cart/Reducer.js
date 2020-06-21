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
    default:
      return prevState;
  }
};
