// Cart Reducer

// Importing Constants
import { CartActionTypes } from "./Cart-Types";

// Initial State
const INITIAL_STATE = {
  hidden: false,
};

// Cart Reducer
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    default:
      return state;
  }
};

// Default Export
export default cartReducer;
