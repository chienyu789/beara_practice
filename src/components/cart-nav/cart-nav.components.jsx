import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { hideCart } from '../../redux/cart/cart.actions';
import { selectCartTotal } from '../../redux/cart/cart.selector';

import CartProduct from '../cart-product/cart-product.components';

import './cart-nav.styles.scss';

const CartNav = ({hideCart, cartProducts, total, history}) =>(
    <div className='cartnav'>
        <div className='close' onClick={hideCart}>&#10005;</div>
        <div className='cartitems'>
            {
                cartProducts.map(cartProduct=>(
                <CartProduct key={ cartProduct.timestamp } cartProduct={cartProduct}/>
                ))
            }
        </div>
        <div className='discountcode'>
        <form>
            <input type='text' placeholder='Discount Code'/>
            <input type='submit' value='Apply'/>
        </form>
        </div>
        <button className='checkout'onClick={()=>{
            history.push('/checkout')
            }}>CHECK OUT<span> £{total}</span></button>
    </div>
);
const mapStateToProps = (state) =>({
    cartProducts: state.cart.cartProducts,
    total: selectCartTotal(state)
});

const mapDispatchToProps = dispatch =>({
    hideCart: () => dispatch(hideCart())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartNav));