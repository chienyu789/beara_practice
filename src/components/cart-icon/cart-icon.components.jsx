import React from 'react';
import { connect } from 'react-redux';

import { showCart } from '../../redux/cart/cart.actions';
import { selectCartCount } from '../../redux/cart/cart.selector';

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

const mapStateToProps = (state) =>({
    count: selectCartCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);