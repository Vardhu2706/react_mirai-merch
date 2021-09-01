// Redux Store

// Importing Helpers
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

// Importing Reducer
import RootReducer from "./Root-Reducer";

// Initializing Middlewares
const middlewares = [logger];

// Creating Store
export const store = createStore(RootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store);
