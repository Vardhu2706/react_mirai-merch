// Collection Item Component

// Importing Helpers
import React from "react";
import { connect } from "react-redux";

// Importing Actions
import { addItem } from "../../redux/cart/Cart-Actions";

// Importing Components
import CustomButton from "../custom-button/Custom-Button-Component";

// Importing Styles
import "./Collection-Item-Styles.scss";

// Functional Component
const CollectionItem = ({ item, addItem }) => {
  // Destructuring item
  const { name, price, imageUrl } = item;

  // Return
  return (
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

      {/* Button */}
      <CustomButton
        inverted
        className="custom-button"
        onClick={() => addItem(item)}
      >
        Add to cart
      </CustomButton>
    </div>
  );
};

// HOF
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

// Default Export
export default connect(null, mapDispatchToProps)(CollectionItem);
