import ShopActionTypes from './shop.type';
import SHOP_DATA from './shop.data';

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    // case ShopActionTypes.FETCH_COLLECTIONS_START:
    //   return state;
    // case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
    //   return state;
    default:
      return state;
  }
};

export default shopReducer;
