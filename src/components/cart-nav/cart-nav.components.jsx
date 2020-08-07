import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { hideCart } from '../../redux/cart/cart.actions';
import { selectCartTotal } from '../../redux/cart/cart.selector';

import CartProduct from '../cart-product/cart-product.components';
import DiscountCode from '../discount-code/discount-code.components';

import {
  CartNavBar, Close, Cartitems, Dicsount, Checkout,
} from './cart-nav.styles';

const CartNav = ({
  hideCartNav, cartProducts, total, history, style,
}) => {
  const [discountState, setdicountState] = useState('');
  return (
    <CartNavBar style={style}>
      <Close onClick={hideCartNav}>&#10005;</Close>
      <Cartitems>
        {
          cartProducts.map((cartProduct) => (
            <CartProduct key={cartProduct.timestamp} cartProduct={cartProduct} />
          ))
      }
      </Cartitems>
      <Dicsount>
        <DiscountCode getDiscount={(discount) => setdicountState(discount)} />
      </Dicsount>
      <Checkout
        type="button"
        className="checkout"
        onClick={() => {
          history.push(`${process.env.PUBLIC_URL}/checkout`, discountState.discount ? { productdiscount: discountState.discount, message: discountState.message } : { productdiscount: 0, message: '' });
        }}
      >
        CHECK OUT
        <span>
          £
          {
            discountState.discount
              ? (total * discountState.discount).toFixed(2)
              : total
          }
        </span>
      </Checkout>
    </CartNavBar>
  );
};
const mapStateToProps = (state) => ({
  cartProducts: state.cart.cartProducts,
  total: selectCartTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  hideCartNav: () => dispatch(hideCart()),
});

const cartProduct = PropTypes.shape({
  imgUrl: PropTypes.string.isRequired,
  linkUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  emboseprice: PropTypes.number,
  text: PropTypes.string,
  quantity: PropTypes.number,
  timestamp: PropTypes.number,
});

CartNav.propTypes = {
  hideCartNav: PropTypes.func.isRequired,
  cartProducts: PropTypes.arrayOf(cartProduct).isRequired,
  total: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  style: PropTypes.shape({
    transform: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartNav));
