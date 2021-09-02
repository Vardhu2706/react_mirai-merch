// Collections Overview Component

// Importing Helpers
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Importing Styles
import { CollectionsOverviewContainer } from "./Collections-Overview-Styles";

// Importing Selectors
import { selectCollectionsForPreview } from "../../redux/shop/Shop-Selector";

// Importing Components
import CollectionPreview from "../collection-preview/Collection-Preview-Component";

// Functional Component
const CollectionsOverview = ({ collections }) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
);

// HOF
const mapDispatchToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

// Default Export
export default connect(mapDispatchToProps)(CollectionsOverview);
