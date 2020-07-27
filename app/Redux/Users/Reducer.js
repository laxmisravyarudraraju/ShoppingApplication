import { UserActionTypes } from "./ActionTypes";

const INITIAL_STATE = {
  currentUser: null,
};

export default (prevState = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.setCurrentUser:
      return {
        ...prevState,
        currentUser: action.payload,
      };
    default:
      return prevState;
  }
};
