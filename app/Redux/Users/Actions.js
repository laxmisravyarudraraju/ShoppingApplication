import { UserActionTypes } from "./ActionTypes";

export const setCurrentUser = (user) => ({
  type: UserActionTypes.setCurrentUser,
  payload: user,
});
