import React, { useState } from 'react';
import { connect } from 'react-redux';

import { selectCartTotal } from '../../redux/cart/cart.selector';

import ShippingAddress from '../../components/shipping-address/shipping-address.components';
import ShippingOption from '../../components/shipping-option/shipping-option.components';

import './checkout.styles.scss';

const CheckoutPage = ({ cartProducts, total }) => {
  const [stepState, setstepState] = useState({ currentStep: 1 });

  const handleStep = (event) => {
    event.preventDefault();
    setstepState({ currentStep: stepState.currentStep + 1 });
  };
  const [shippriceState, setshippriceState] = useState({ label: '', price: 0 });

  const handleClicked = (e) => {
    setshippriceState({ label: e.currentTarget.id, price: parseInt(e.currentTarget.value) });
  };

  return (
    <div className="checkout-page">
      <div className="checkout-detail">
        {
            cartProducts.map(cartProduct => (
              <div className="checkout-item" key={cartProduct.timestamp}>
                <img src={cartProduct.imgUrl} alt={cartProduct.title} />
                <span>{cartProduct.name}</span>
                <span>
                  £
                  {cartProduct.price}
                </span>
              </div>
            ))
        }
        <span className="finaltotal">
          Shipping Price £
          {shippriceState.price}
        </span>
        <span className="finaltotal">
          £
          {total + shippriceState.price}
        </span>
        <span className="finaltotal">
          with £
          {(total / 6).toFixed(2)}
          in taxes
        </span>
      </div>
      <div>
        <ShippingAddress handleSubmit={handleStep} />
        <ShippingOption step={stepState.currentStep} onChange={handleClicked} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartProducts: state.cart.cartProducts,
  total: selectCartTotal(state),
});

export default connect(mapStateToProps)(CheckoutPage);
