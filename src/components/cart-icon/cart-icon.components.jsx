import React from 'react';
import { connect } from 'react-redux';

import { showCart } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/carticon.svg';

import './cart-icon.styles.scss';

const CartIcon = ({showCart}) =>{
    return(
    <div className='cart' onClick={showCart}>
        <ShoppingIcon/>
        <span>0</span>
    </div>
)};

const mapDispatchToProps = dispatch =>({
    showCart: () => dispatch(showCart())
})

export default connect(null,mapDispatchToProps)(CartIcon);