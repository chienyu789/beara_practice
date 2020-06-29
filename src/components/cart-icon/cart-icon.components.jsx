import React from 'react';
import { connect } from 'react-redux';

import { showCart } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/carticon.svg';

import './cart-icon.styles.scss';

const CartIcon = ({showCart, count}) =>{
    return(
    <div className='cart' onClick={showCart}>
        <ShoppingIcon/>
        <span>{ count }</span>
    </div>
)};

const mapDispatchToProps = dispatch =>({
    showCart: () => dispatch(showCart())
})

const mapStateToProps = ({cart: { cartProducts }}) =>({
    count: cartProducts.reduce((accumulated, cartPtoduct) => accumulated + cartPtoduct.quantity, 0)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);