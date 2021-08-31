// Root Reducer

// Importing Helpers
import { combineReducers } from "redux";

// Importing Reducers
import userReducer from "./user/User-Reducer";

// Exporting Combined Reducer
export default combineReducers({
  user: userReducer,
});
