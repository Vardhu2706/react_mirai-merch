// Category Page

// Importing Helpers
import React from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// Importing Styles
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer,
} from "./Collection-Styles";

// Importing Selector
import { selectCollection } from "../../redux/shop/Shop-Selector";

// Importing Components
import CollectionItemComponent from "../../components/collection-item/Collection-Item-Component";

// Functional Component
const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <>
      <Helmet>
        <title>{`Mirai Merch | ${title}`}</title>
      </Helmet>
      <CollectionPageContainer>
        <CollectionTitle>{title}</CollectionTitle>
        <CollectionItemsContainer>
          {items.map((item) => (
            <CollectionItemComponent key={item.id} item={item} />
          ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    </>
  );
};

// HOF
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

// Default Export
export default connect(mapStateToProps)(CollectionPage);
