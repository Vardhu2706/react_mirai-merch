// Checkout Component

// Importing Helpers
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Importing Selectors
import { selectCartItems, selectTotal } from "../../redux/cart/Cart-Selector";

// Importing Styles
import "./Checkout-Styles.scss";

// Importing Components
import CheckoutItem from "../../components/checkout-item/Checkout-Item-Component";

// Functional Component
const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <div className="total">
      <span>Total: ${total}</span>
    </div>
  </div>
);

// HOF
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotal,
});

// Default Export
export default connect(mapStateToProps)(CheckoutPage);
