// Cart Icon Component

// Importing Helpers
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Importing Actions
import { toggleCartHidden } from "../../redux/cart/Cart-Actions";

// Importing Selectors
import { selectCartItemsCount } from "../../redux/cart/Cart-Selector";

// Importing Styles
import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./Cart-Icon-Styles";

// Functional Component
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

// HOF - Map Dispatch To Props
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// HOF - Map State To Props
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

// Default Export
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
