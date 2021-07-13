// Importing Helpers
import React from "react";
import { Link } from "react-router-dom";

// Importing Components

// Importing Styles
import "./Header-Styles.scss";

// Functional Component
const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
      Mirai Merch
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      <Link className="option" to="/signin">
        LOGIN
      </Link>
    </div>
  </div>
);

// Default Export
export default Header;
