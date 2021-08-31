// Cart Item Component

// Importing Helpers
import React from "react";

// Importing Styles
import "./Cart-Item-Styles.scss";

// Functional Component
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

// Default Export
export default CartItem;
