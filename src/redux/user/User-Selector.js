// User Selector

// Importing Helpers
import { createSelector } from "reselect";

// Selecting User
const selectUser = (state) => state.user;

// Memoized Selector
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
