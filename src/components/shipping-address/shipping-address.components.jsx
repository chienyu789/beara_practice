/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './shipping-address.styles.scss';

import { CountryDropdown } from 'react-country-region-selector';

const ShippingAddress = ({ handleSubmit }) => {
  const [countryState, setcountryState] = useState({ country: '' });
  const selectCountry = (val) => {
    setcountryState({ country: val });
  };
  return (
    <div className="shipping-detail">
      <form onSubmit={handleSubmit} className="shipping-form">
        <h1>SHIPPING ADDRESS</h1>
        <div className="textfield">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="textfield">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="textfield">
          <label htmlFor="phone-number">Phone number</label>
          <input type="text" id="phone-number" required />
        </div>
        <div className="textfield">
          <label htmlFor="country">Country/ Region</label>
          <CountryDropdown
            id="country"
            className="countryselect"
            value={countryState.country}
            onChange={(val) => selectCountry(val)}
            required
          />
        </div>
        <div className="textfield">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required />
        </div>
        <div className="address-row">
          <div className="textfield">
            <label htmlFor="town">Town</label>
            <input type="text" id="town" required />
          </div>
          <div className="textfield">
            <label htmlFor="county">County</label>
            <input type="text" id="county" required />
          </div>
          <div className="textfield">
            <label htmlFor="post-code">Post Code</label>
            <input type="text" id="post-code" required />
          </div>
        </div>
        <div className="textfield">
          <label htmlFor="customer-notes">Customer Notes</label>
          <textarea name="customer-notes" id="customer-notes" />
        </div>
        <input type="submit" name="confirmed" value="CONFIRM" />
      </form>
    </div>
  );
};

ShippingAddress.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ShippingAddress;
