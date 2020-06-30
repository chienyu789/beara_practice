import React, { useState } from 'react';
import { connect } from 'react-redux';


import { selectCartTotal } from '../../redux/cart/cart.selector';

import { CountryDropdown } from 'react-country-region-selector';

import './checkout.styles.scss';

const CheckoutPage = ({ cartProducts, total}) =>{
    const [ countryState, setcountryState ] = useState({country: ''});
    const selectCountry = (val) => {
        setcountryState({ country: val });
      }
    return(
    <div className='checkout-page'>
        <div className='checkout-detail'>
            {
                cartProducts.map(cartProduct=>(
                <div className='checkout-item' key={ cartProduct.timestamp }>
                <img src={cartProduct.imgUrl} alt={cartProduct.title}/>
                <span>{cartProduct.name}</span>
                <span>£{cartProduct.price}</span>
                </div>
                ))
            }
            <span className='finaltotal'>£{total}</span>
        </div>
        <div className='shipping-detail'>
            <form>
                <h1>SHIPPING ADDRESS</h1>
                Email<br/>
                <input type='email' name='email'/>
                Name<br/>
                <input type='text' name='name'/>
                Phone number<br/>
                <input type='text' name='phone-number'/><br/>
                Country/ Region<br/>
                <CountryDropdown
                value={countryState.country}
                onChange={(val) => selectCountry(val)} /><br/>
                Address
                <input type='text' name='address'/><br/>
                Town
                <input type='text' name='town'/>
                County
                <input type='text' name='county'/>
                Post Code
                <input type='text' name='post-code'/><br/>
                Customer Notes
                <input type='text-area' name='customer-notes'/>
            </form>
        </div>
    </div>
)};

const mapStateToProps = (state) =>({
    cartProducts: state.cart.cartProducts,
    total: selectCartTotal(state)
});

export default connect(mapStateToProps)(CheckoutPage);