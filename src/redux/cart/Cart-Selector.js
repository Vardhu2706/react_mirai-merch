// Cart Selector

// Importing Helpers
import { createSelector } from "reselect";

// Selecting Cart
const selectCart = (state) => state.cart;

// Memoized Selector
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);
