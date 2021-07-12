// Importing Helpers
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// Importing Components
import App from "./App";

// Importing Styles
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
