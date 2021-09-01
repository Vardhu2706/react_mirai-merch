// Cart Dropdown

// Importing Helpers
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";

// Importing Selector
import { selectCartItems } from "../../redux/cart/Cart-Selector";

// Importing Actions
import { toggleCartHidden } from "../../redux/cart/Cart-Actions";

// Importing Styles
import "./Cart-Dropdown-Styles.scss";

// Importing Components
import CartItem from "../cart-item/Cart-Item-Component";
import CustomButton from "../custom-button/Custom-Button-Component";

// Functional Component
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    {cartItems.length ? (
      <>
        <div className="cart-items">
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </div>
        <CustomButton
          className="custom-button"
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          CHECKOUT
        </CustomButton>
      </>
    ) : (
      <span className="empty-message">No Items In Cart</span>
    )}
  </div>
);

// HOF
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// Default Export
export default withRouter(connect(mapStateToProps)(CartDropdown));
