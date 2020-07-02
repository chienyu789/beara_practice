import React,{ useState } from 'react';

import './shipping-address.styles.scss';

import { CountryDropdown } from 'react-country-region-selector';

const ShippingAddress = ({ handleSubmit }) => {
    const [ countryState, setcountryState ] = useState({country: ''});
    const selectCountry = (val) => {
        setcountryState({ country: val });
      }
    return(
        <div className='shipping-detail'>
            <form onSubmit={handleSubmit}>
                <h1>SHIPPING ADDRESS</h1>
                <label for='email'>Email</label>
                <input type='email' id='email' size='50' required/>
                <label for='name'>Name</label>
                <input type='text' id='name'size='50' required/>
                <label for='phone-number'>Phone number</label>
                <input type='text' id='phone-number'size='30' required/>
                <label for='country'>Country/ Region</label>
                <CountryDropdown id='country'
                value={countryState.country}
                onChange={(val) => selectCountry(val)} required/>
                <label for='address'>Address</label>
                <input type='text' id='address'size='50'required/>
                <label for='town'>Town</label>
                <input type='text' id='town'size='10' required/>
                <label for='county'>County</label>
                <input type='text' id='county'size='10' required/>
                <label for='post-code'>Post Code</label>
                <input type='text' id='post-code'size='10' required/>
                Customer Notes
                <textarea name='customer-notes'/>
                <input type='submit' name='confirmed' value='CONFIRM'/>
            </form>
        </div>
    )};

export default ShippingAddress;