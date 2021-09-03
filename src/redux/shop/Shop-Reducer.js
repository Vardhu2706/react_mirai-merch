// Shop Reducer

// Imports
import SHOP_DATA from "../../pages/shop/Shop-Data";

// Importing Constants
import ShopActionTypes from "./Shop-Types";

// Initial State
const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
