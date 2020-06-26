import React from 'react';
import { connect } from 'react-redux';

import { hideCart } from '../../redux/cart/cart.actions';

import CartProduct from '../cart-product/cart-product.components';

import './cart-nav.styles.scss';

const CartNav = ({hideCart, cartProducts}) =>(
    <div className='cartnav'>
        <div onClick={hideCart}>&#10005;</div>
        <div className='cartitems'>
            {
                cartProducts.map(cartProduct=>(
                <CartProduct key={ cartProduct.id } cartProduct={cartProduct}/>
                ))
            }
        </div>
        <form>
            <input type='text' placeholder='Discount Code'/>
            <input type='submit' value='Apply'/>
        </form>
        <button>CHECK OUT<span>2</span></button>
    </div>
);
const mapStateToProps = ({cart: { cartProducts }}) =>({
    cartProducts
});

const mapDispatchToProps = dispatch =>({
    hideCart: () => dispatch(hideCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartNav);