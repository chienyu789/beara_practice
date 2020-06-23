import { combineReducers } from 'redux';

import dropdownbagsReducer from './dropdownbags/dropdownbags.reducer';
import shopReducer from './shop/shop.reducer';

export default combineReducers({
    dropdownbags: dropdownbagsReducer,
    shop: shopReducer
})