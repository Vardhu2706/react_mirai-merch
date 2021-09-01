// Root Reducer

// Importing Helpers
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Importing Reducers
import userReducer from "./user/User-Reducer";
import cartReducer from "./cart/Cart-Reducer";
import directoryReducer from "./directory/Directory-Reducer";
import shopReducer from "./shop/Shop-Reducer";

// Persist Config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

// Root Reducer
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

// Exporting Combined Reducer
export default persistReducer(persistConfig, rootReducer);
