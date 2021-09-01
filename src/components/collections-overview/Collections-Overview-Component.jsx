// Collections Overview Component

// Importing Helpers
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Importing Styles
import "./Collections-Overview-Styles.scss";

// Importing Selectors
import { selectCollectionsForPreview } from "../../redux/shop/Shop-Selector";

// Importing Components
import CollectionPreview from "../collection-preview/Collection-Preview-Component";

// Functional Component
const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

// HOF
const mapDispatchToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

// Default Export
export default connect(mapDispatchToProps)(CollectionsOverview);
