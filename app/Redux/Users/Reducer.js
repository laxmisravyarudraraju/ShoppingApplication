import { UserActionTypes } from "./ActionTypes";

const initialState = {
  currentUser: null,
};

export default (prevState = initialState, action) => {
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
