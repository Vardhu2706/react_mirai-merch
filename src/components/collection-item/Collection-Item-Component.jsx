// Importing Helpers
import React from "react";

// Importing Components

// Importing Styles
import "./Collection-Item-Styles.scss";

// Functional Component
const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
  </div>
);

// Default Export
export default CollectionItem;
