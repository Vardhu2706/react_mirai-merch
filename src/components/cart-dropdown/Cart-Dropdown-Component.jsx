// Cart Dropdown

// Importing Helpers
import React from "react";
import { connect } from "react-redux";

// Importing Styles
import "./Cart-Dropdown-Styles.scss";

// Importing Components
import CartItem from "../cart-item/Cart-Item-Component";
import CustomButton from "../custom-button/Custom-Button-Component";

// Functional Component
const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton className="custom-button">CHECKOUT</CustomButton>
  </div>
);

// HOF
const maptStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

// Default Export
export default connect(maptStateToProps)(CartDropdown);
