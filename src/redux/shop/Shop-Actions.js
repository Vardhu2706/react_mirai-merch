// Shop Actions

// Importing Constants
import ShopActionTypes from "./Shop-Types";

// Actions
export const updateCollections = (collectionsMap) => ({
    type: ShopActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})