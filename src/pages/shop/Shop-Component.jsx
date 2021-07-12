// Importing Helpers
import React from "react";

// Importing Components
import SHOP_DATA from "./Shop-Data";
import CollectionPreview from "../../components/collection-preview/Collection-Component";

// Class Component
class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  // Render Method
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps}/>
        ))}
      </div>
    );
  }
}

// Default Export
export default ShopPage;
