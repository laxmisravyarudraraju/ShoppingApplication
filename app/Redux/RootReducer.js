import { combineReducers } from "redux";

import UserReducer from "./Users/Reducer";

export default combineReducers({
  user: UserReducer,
});
