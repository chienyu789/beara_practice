import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import './cart-product.styles.scss';
import { removeProduct } from '../../redux/cart/cart.actions';

const CartProduct = ({ cartProduct, removeProductFromCart }) => {
  const {
    imgUrl, title, name, price, emboseprice, text,
  } = cartProduct;
  return (
    <div className="cart-product">
      <img src={imgUrl} alt={title} />
      <div>
        <span>{name}</span>
        <span>
          £
          {
            emboseprice
              ? emboseprice + price
              : price
          }
        </span>
        {
          text
            ? (
              <span>
                Embossing
                {text}
              </span>
            )
            : null
        }
      </div>
      <div className="remove" onClick={() => removeProductFromCart(cartProduct)}>&#10005;</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  removeProductFromCart: (product) => dispatch(removeProduct(product)),
});

CartProduct.propTypes = {
  cartProduct: PropTypes.shape({
    imgUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    emboseprice: PropTypes.number,
    text: PropTypes.string,
  }).isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(CartProduct);
