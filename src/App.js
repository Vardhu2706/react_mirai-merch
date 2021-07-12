// Importing Helpers
import React from "react";
import { Route } from "react-router-dom";

// Importing Styles
import "./App.css";

// Importing Components
import HomePage from "./pages/homepage/Homepage-Component";

const HatsPage = () => <div>Hats</div>;

// Functional Component
const App = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
    </div>
  );
};

// Default Export
export default App;
