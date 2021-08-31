// Index.js

// Importing Helpers
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Importing Components
import App from "./App";

// Importing Styles
import "./index.css";

// Importing Store
import store from "./redux/Store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
