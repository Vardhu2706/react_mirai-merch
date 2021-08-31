// Cart Icon Component

// Importing Helpers
import React from "react";
import { connect } from "react-redux";

// Importing Actions
import { toggleCartHidden } from "../../redux/cart/Cart-Actions";

// Importing Selectors
import { selectCartItemsCount } from "../../redux/cart/Cart-Selector";

// Importing Media
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// Importing Styles
import "./Cart-Icon-Styles.scss";

// Functional Component
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

// HOF - Map Dispatch To Props
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

// HOF - Map State To Props
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

// Default Export
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
