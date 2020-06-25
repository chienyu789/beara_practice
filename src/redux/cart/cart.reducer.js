import CartActionTypes from './cart.types';
import { addProductToCart } from '../cart/cart.utils';

const INITIAL_STATE = {
    hidden: false,
    cartProducts:[]
};

const cartReducer = ( state = INITIAL_STATE, action ) =>{
    switch( action.type ){
        case CartActionTypes.SHOW_CART:
            return{
                ...state,
                hidden:true
            }
        case CartActionTypes.HIDE_CART:
            return{
                ...state,
                hidden:false
            }
        case CartActionTypes.ADD_PRODUCT:
            return{
                ...state,
                cartProducts: addProductToCart(state.cartProducts, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartProducts:[]
            }
        default:
            return{
                state
            }
    }
};

export default cartReducer;