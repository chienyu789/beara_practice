/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

import './shipping-option.styles.scss';

const ShippingOption = ({ step, onChange }) => {
  const disabled = step > 1;

  return (
    <div>
      <fieldset disabled={!disabled}>
        <p>shipping option</p>
        <form className="optionform">
          <div className="option">
            <label htmlFor="free">Free UK Shipping</label>
            <input type="radio" id="free" name="option" value="0" onClick={onChange} />
          </div>
          <div className="option">
            <label htmlFor="express">Express UK Shipping</label>
            <input type="radio" id="express" name="option" value="5" onClick={onChange} />
          </div>
          <div className="option">
            <label htmlFor="international">International Shipping</label>
            <input type="radio" id="international" name="option" value="25" onClick={onChange} />
          </div>
        </form>
      </fieldset>
    </div>
  );
};

ShippingOption.propTypes = {
  step: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ShippingOption;
