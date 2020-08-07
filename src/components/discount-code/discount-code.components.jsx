import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import DISCOUNT_CODE from './discount.data';

import './discount-code.styles.scss';

const DiscountCode = ({ getDiscount }) => {
  const [codeState, setcodeState] = useState('');
  const [messageState, setmessageState] = useState({ discount: '', message: '' });
  const codearray = DISCOUNT_CODE;
  const getDiscountCode = (e) => {
    setcodeState(e.target.value);
  };
  const message = () => {
    const code1 = codearray.find((item) => item.code === codeState);
    if (code1) {
      setmessageState({ discount: code1.discount, message: code1.message });
    } else {
      setmessageState({ discount: 1, message: 'INVALID COUPON' });
    }
  };

  useEffect(() => {
    getDiscount(messageState);
  }, [messageState]);

  return (
    <div>
      <form>
        <input type="text" name="code" onChange={getDiscountCode} />
        <input type="button" value="apply" onClick={message} />
      </form>
      <span>{messageState.message}</span>
    </div>
  );
};

DiscountCode.propTypes = {
  getDiscount: PropTypes.func.isRequired,
};

export default DiscountCode;
