import React from 'react';

import './shipping-option.styles.scss';

const ShippingOption = ({ step, onChange }) => {
  const disabled = step > 1;

  return (
    <div>
        <fieldset disabled={!disabled}>
        <p>shipping option</p>
        <form>
        <input type='radio' id='free' name='option' value='0' onClick={onChange}/>
        <label for='free'>Free UK Shipping</label>
        <input type='radio' id='express' name='option' value='5' onClick={onChange}/>
        <label for='express'>Express UK Shipping</label>
        <input type='radio' id='international' name='option' value='25' onClick={onChange}/>
        <label for='international'>International Shipping</label>
        </form>
        </fieldset>
    </div>
)};

export default ShippingOption;