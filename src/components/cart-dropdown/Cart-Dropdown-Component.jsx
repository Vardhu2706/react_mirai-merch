// Cart Dropdown

// Importing Helpers
import React from "react";
import CustomButton from "../custom-button/Custom-Button-Component";

// Importing Styles
import "./Cart-Dropdown-Styles.scss";

// Functional Component
const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>CHECKOUT</CustomButton>
  </div>
);

// Default Export
export default CartDropdown;
