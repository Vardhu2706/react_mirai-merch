// Importing Helpers
import React from "react";

// Importing Components
import CollectionItem from "../collection-item/Collection-Item-Component";

// Importing Styles
import "./Collection-Preview-Styles.scss";

// Functional Component
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

// Default Export
export default CollectionPreview;
