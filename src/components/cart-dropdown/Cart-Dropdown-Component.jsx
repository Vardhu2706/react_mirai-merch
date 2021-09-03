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
import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./Cart-Dropdown-Styles";

// Importing Components
import CartItem from "../cart-item/Cart-Item-Component";

// Functional Component
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    {cartItems.length ? (
      <>
        <CartItemsContainer>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))}
        </CartItemsContainer>
        <CartDropdownButton
          onClick={() => {
            history.push("/checkout");
            dispatch(toggleCartHidden());
          }}
        >
          GO TO CHECKOUT
        </CartDropdownButton>
      </>
    ) : (
      <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
    )}
  </CartDropdownContainer>
);

// HOF
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

// Default Export
export default withRouter(connect(mapStateToProps)(CartDropdown));
