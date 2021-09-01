// Checkout Item Component

// Importing Helpers
import React from "react";

// Importing Styles
import "./Checkout-Item-Styles.scss";

// Functional Component
const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img alt="item" src={imageUrl} />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

// Default Export
export default CheckoutItem;
