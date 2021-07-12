// Importing Helpers
import React from "react";
import { Switch, Route } from "react-router-dom";

// Importing Styles
import "./App.css";
import ShopPage from "./pages/shop/Shop-Component";

// Importing Components
import HomePage from "./pages/homepage/Homepage-Component";

// Functional Component
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  );
};

// Default Export
export default App;
