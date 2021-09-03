// Shop Page

// Importing Helpers
import React from "react";
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";

// Importing Components/Pages
import CollectionsOverviewComponent from "../../components/collections-overview/Collections-Overview-Component";
import CollectionPage from "../collection/Collection-Page";

// Importing Firestore Utils
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/Firebase-Utils";

// Importing Actions
import { updateCollections } from "../../redux/shop/Shop-Actions";

// Import HOC
import WithSpinner from "../../components/with-spinner/With-Spinner-Component";

//
const CollectionsOverviewWithSpinner = WithSpinner(
  CollectionsOverviewComponent
);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// Class Component
class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  // Component Did Mount
  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <>
        <Helmet>
          <title>Mirai Merch | Shop</title>
        </Helmet>
        <div className="shop-page">
          <Route
            exact
            path={`${match.path}`}
            render={(props) => (
              <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
            )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            render={(props) => (
              <CollectionPageWithSpinner isLoading={loading} {...props} />
            )}
          />
        </div>
      </>
    );
  }
}

// HOF
const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

// Default Export
export default connect(null, mapDispatchToProps)(ShopPage);
