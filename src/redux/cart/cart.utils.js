export const addProductToCart = ( cartProducts, cartProductToAdd ) =>{
    const existingCartItem = cartProducts.find(
        cartProduct => cartProduct.id === cartProductToAdd.id
    );
    if(existingCartItem){
        return cartProducts.map(
            cartProduct => cartProduct.id === cartProductToAdd.id?
            {...cartProduct, quantity: cartProduct.quantity+1 }:
            cartProduct
        );
    };

    return [...cartProducts, {...cartProductToAdd, quantity:1}]
};

export const removeProductToCart = ( cartProducts, cartProductToRemove ) =>{
    const existingCartItem = cartProducts.find(
        cartProduct => cartProduct.id === cartProductToRemove.id
    );
    if(existingCartItem.quantity===1){
        return cartProducts.filter(cartProduct => cartProduct.id !== cartProductToRemove.id)
    }
    return cartProducts.map(
        cartProduct => cartProduct.id === cartProductToRemove.id?
         {...cartProduct, quantity: cartProduct.quantity-1}:
          cartProduct
        );
}