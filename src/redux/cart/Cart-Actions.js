// Cart Actions

// Importing Constants
import CartActionTypes from "./Cart-Types";

// Toggle Cart Hidden Action
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

// Add Item To Cart Action
export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

// Clear Item From Cart Action
export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

// Remove Item
export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});
