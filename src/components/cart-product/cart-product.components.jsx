import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Product, Image, Content, Remove } from './cart-product.styles';
import { removeProduct } from '../../redux/cart/cart.actions';

const CartProduct = ({ cartProduct, removeProductFromCart }) => {
  const {
    imgUrl, title, name, price, emboseprice, text,
  } = cartProduct;
  return (
    <Product>
      <Image src={imgUrl} alt={title} />
      <div>
        <Content>{name}</Content>
        <Content>
          £
          {
            emboseprice
              ? emboseprice + price
              : price
          }
        </Content>
        {
          text
            ? (
              <Content>
                Embossing
                {text}
              </Content>
            )
            : null
        }
      </div>
      <Remove onClick={() => removeProductFromCart(cartProduct)}>&#10005;</Remove>
    </Product>
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
