// Importing Helpers
import React from "react";

// Importing Components
import CollectionItem from "../collection-item/Collection-Item-Component";

// Importing Styles
import "./Collection-Styles.scss";

// Functional Component
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemsProps }) => (
            <CollectionItem key={id} {...otherItemsProps} />
          ))}
      </div>
    </div>
  );
};

// Default Export
export default CollectionPreview;
