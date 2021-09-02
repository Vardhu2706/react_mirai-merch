// Cart Item Component

// Importing Helpers
import React from "react";

// Importing Styles
import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from "./Cart-Item-Styles";

// Functional Component
const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetailsContainer>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

// Default Export
export default CartItem;
