export const addProductToCart = (cartProducts, cartProductToAdd) => {
  const timestamp = Date.now();
  return [...cartProducts, { ...cartProductToAdd, quantity: 1, timestamp }];
};

export const removeProductToCart = (cartProducts, cartProductToRemove) => {
  const existingCartItem = cartProducts.find(
    (cartProduct) => cartProduct.timestamp === cartProductToRemove.timestamp,
  );
  if (existingCartItem.quantity === 1) {
    return cartProducts.filter(
      (cartProduct) => cartProduct.timestamp !== cartProductToRemove.timestamp,
    );
  }
  return cartProducts.map(
    (cartProduct) => (cartProduct.timestamp === cartProductToRemove.timestamp
      ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
      : cartProduct),
  );
};
