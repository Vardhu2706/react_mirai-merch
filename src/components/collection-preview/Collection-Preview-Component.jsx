// Importing Helpers
import React from "react";

// Importing Components
import CollectionItem from "../collection-item/Collection-Item-Component";

// Importing Styles
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./Collection-Preview-Styles";

// Functional Component
const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

// Default Export
export default CollectionPreview;
