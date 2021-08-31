// Cart Icon Component

// Importing Helpers
import React from "react";
import { connect } from "react-redux";

// Importing Actions
import { toggleCartHidden } from "../../redux/cart/Cart-Actions";

// Importing Media
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// Importing Styles
import "./Cart-Icon-Styles.scss";

// Functional Component
const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

// HOF
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// Default Export
export default connect(null, mapDispatchToProps)(CartIcon);
