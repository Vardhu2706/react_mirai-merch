// Shop Page

// Importing Helpers
import React from "react";
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

// Importing Components/Pages
import CollectionsOverviewComponent from "../../components/collections-overview/Collections-Overview-Component";
import CollectionPage from "../collection/Collection-Page";


// Importing Actions
import { fetchCollectionsRequestAsync } from "../../redux/shop/Shop-Actions";

import { selectIsCollectionFetching } from "../../redux/shop/Shop-Selector";

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
    const { fetchCollectionsRequestAsync } = this.props;
    fetchCollectionsRequestAsync();
  }

  render() {
    const { match, isCollectionFetching } = this.props;
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
              <CollectionsOverviewWithSpinner
                isLoading={isCollectionFetching}
                {...props}
              />
            )}
          />
          <Route
            path={`${match.path}/:collectionId`}
            render={(props) => (
              <CollectionPageWithSpinner
                isisCollectionFetching={isCollectionFetching}
                {...props}
              />
            )}
          />
        </div>
      </>
    );
  }
}

// HOF
const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsRequestAsync: () => dispatch(fetchCollectionsRequestAsync()),
});
// Default Export
export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
