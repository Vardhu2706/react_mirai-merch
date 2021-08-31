// User Actions

// Importing Constants
import { UserActionTypes } from "./User-Types";

// Set Current User Action
export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});
