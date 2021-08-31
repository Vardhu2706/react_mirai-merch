// Redux Store

// Importing Helpers
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

// Importing Reducer
import RootReducer from "./Root-Reducer";

// Initializing Middlewares
const middlewares = [logger];

// Creating Store
const store = createStore(RootReducer, applyMiddleware(...middlewares));

// Exporting Store
export default store;
