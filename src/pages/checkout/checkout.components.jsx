import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
    setshippriceState({ label: e.currentTarget.id, price: parseFloat(e.currentTarget.value) });
  };

  return (
    <div className="checkout-page">
      <div className="checkout-detail">
        {
            cartProducts.map((cartProduct) => (
              <div className="checkout-item" key={cartProduct.timestamp}>
                <img src={cartProduct.imgUrl} alt={cartProduct.title} />
                <div className="checkout-item-main">
                  <span>{cartProduct.name}</span>
                  <span>
                    £
                    {cartProduct.price}
                  </span>
                </div>
                {
                  cartProduct.emboseprice
                    ? (
                      <div className="embose-item">
                        <div className="checkout-item-main">
                          <span>Embossing Details</span>
                          <span>£15.00</span>
                        </div>
                        <span>
                          Text-
                          {cartProduct.text}
                        </span>
                        <span>
                          Font-
                          {cartProduct.font}
                        </span>
                        <span>
                          Colour-
                          {cartProduct.colour}
                        </span>
                        <span>
                          Position-
                          {cartProduct.position}
                        </span>
                      </div>
                    )
                    : null
                }
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

CheckoutPage.propTypes = {
  cartProducts: PropTypes.shape({
    timestamp: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    text: PropTypes.string,
    font: PropTypes.string,
    colour: PropTypes.string,
    position: PropTypes.string,
    map: PropTypes.func.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(CheckoutPage);
