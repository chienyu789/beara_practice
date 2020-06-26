import React from 'react';

import { connect } from 'react-redux';

import './cart-product.styles.scss'
import { removeProduct } from '../../redux/cart/cart.actions';

const CartProduct = ({cartProduct, removeProduct}) => {
    const { imgUrl, title, name, price } = cartProduct;
    return(
    <div className='cart-product'>
        <img src={imgUrl} alt={title}/>
        <div>
        <span>{name}</span>
        <span>{price}</span>
        </div>
        <div className='remove' onClick={()=>removeProduct(cartProduct)}>&#10005;</div>
    </div>
)};

const mapDispatchToProps = dispatch =>({
    removeProduct: product => dispatch(removeProduct(product))
})

export default connect(null, mapDispatchToProps)(CartProduct);