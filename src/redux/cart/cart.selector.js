import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartProducts = createSelector(
  [selectCart],
  (cart) => cart.cartProducts,
);

export const selectCartCount = createSelector(
  [selectCartProducts],
  (cartProducts) => cartProducts.reduce(
    (accumulated, cartPtoduct) => accumulated + cartPtoduct.quantity, 0,
  ),
);

export const selectCartTotal = createSelector(
  [selectCartProducts],
  (cartProducts) => cartProducts.reduce(
    (accumulated, cartProduct) => (
      cartProduct.emboseprice
        ? cartProduct.quantity * 15 + accumulated + cartProduct.quantity * cartProduct.price
        : accumulated + cartProduct.quantity * cartProduct.price), 0,
  ),
);
