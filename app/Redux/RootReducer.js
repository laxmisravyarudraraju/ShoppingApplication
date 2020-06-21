import { combineReducers } from "redux";

import UserReducer from "./Users/Reducer";
import CartReducer from "./Cart/Reducer";

export default combineReducers({
  user: UserReducer,
  cart: CartReducer,
});
