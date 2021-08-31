// User Reducer

// Importing Constants
import { UserActionTypes } from "./User-Types";

// Initial State
const INITIAL_STATE = {
  currentUser: null,
};

// User Reducer
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

// Default Export
export default userReducer;
