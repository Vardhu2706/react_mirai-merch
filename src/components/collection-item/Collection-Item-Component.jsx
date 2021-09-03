// Collection Item Component

// Importing Helpers
import React from "react";
import { connect } from "react-redux";

// Importing Actions
import { addItem } from "../../redux/cart/Cart-Actions";

// Importing Styles
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./Collection-Item-Styles";

// Functional Component
const CollectionItem = ({ item, addItem }) => {
  // Destructuring item
  const { name, price, imageUrl } = item;

  // Return
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer className="collection-footer">
        <NameContainer className="name">{name}</NameContainer>
        <PriceContainer className="price">₹{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

// HOF
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

// Default Export
export default connect(null, mapDispatchToProps)(CollectionItem);
