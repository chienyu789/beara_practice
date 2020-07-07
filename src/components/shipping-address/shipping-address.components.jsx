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
      <form onSubmit={handleSubmit}>
        <h1>SHIPPING ADDRESS</h1>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" size="50" required />
        <label htmlFor="name">Name</label>
        <input type="text" id="name" size="50" required />
        <label htmlFor="phone-number">Phone number</label>
        <input type="text" id="phone-number" size="30" required />
        <label htmlFor="country">Country/ Region</label>
        <CountryDropdown
          id="country"
          value={countryState.country}
          onChange={(val) => selectCountry(val)}
          required
        />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" size="50" required />
        <label htmlFor="town">Town</label>
        <input type="text" id="town" size="10" required />
        <label htmlFor="county">County</label>
        <input type="text" id="county" size="10" required />
        <label htmlFor="post-code">Post Code</label>
        <input type="text" id="post-code" size="10" required />
        Customer Notes
        <textarea name="customer-notes" />
        <input type="submit" name="confirmed" value="CONFIRM" />
      </form>
    </div>
  );
};

ShippingAddress.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ShippingAddress;
