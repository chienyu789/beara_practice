import CartActionTypes from './cart.types';

export const showCart = () => ({
  type: CartActionTypes.SHOW_CART,
});

export const hideCart = () => ({
  type: CartActionTypes.HIDE_CART,
});

export const addProduct = (product) => ({
  type: CartActionTypes.ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (product) => ({
  type: CartActionTypes.REMOVE_PRODUCT,
  payload: product,
});
