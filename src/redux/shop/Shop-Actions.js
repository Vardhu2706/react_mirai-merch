// Shop Actions

// Importing Helpers
import ShopActionTypes from "./Shop-Types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/Firebase-Utils";

// Actions
// Request Action
export const fetchCollectionsRequest = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_REQUEST,
});

// Success Action
export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

// Error Action
export const fetchCollectionsFail = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAIL,
  payload: errorMessage,
});

export const fetchCollectionsRequestAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsRequest());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
        this.setState({ loading: false });
      })
      .catch((e) => dispatch(fetchCollectionsFail(e.message)));
  };
};
