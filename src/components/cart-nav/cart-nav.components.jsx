import React from 'react';
import { connect } from 'react-redux';


import { hideCart } from '../../redux/cart/cart.actions';

import './cart-nav.styles.scss';

const CartNav = ({hideCart}) =>(
    <div className='cartnav'>
        <div onClick={hideCart}>&#10005;</div>
        <form>
            <input type='text' placeholder='Discount Code'/>
            <input type='submit' value='Apply'/>
        </form>
        <button>CHECK OUT<span>2</span></button>
    </div>
);

const mapDispatchToProps = dispatch =>({
    hideCart: () => dispatch(hideCart())
})

export default connect(null,mapDispatchToProps)(CartNav);