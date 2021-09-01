// Shop Page

// Importing Helpers
import React from "react";
import { Route } from "react-router-dom";

// Importing Components/Pages
import CollectionsOverviewComponent from "../../components/collections-overview/Collections-Overview-Component";
import CollectionPage from "../collection/Collection-Page";

// Functional Component
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route
      exact
      path={`${match.path}`}
      component={CollectionsOverviewComponent}
    />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

// Default Export
export default ShopPage;
