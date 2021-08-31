// Cart Reducer

// Importing Helpers
import { addItemToCart } from "./Cart-Utils";

// Importing Constants
import CartActionTypes from "./Cart-Types";

// Initial State
const INITIAL_STATE = {
  hidden: false,
  cartItems: [],
};

// Cart Reducer
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

// Default Export
export default cartReducer;
