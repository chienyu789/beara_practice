export const addProductToCart = ( cartProducts, cartProductToAdd ) =>{
    console.log(cartProducts);
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