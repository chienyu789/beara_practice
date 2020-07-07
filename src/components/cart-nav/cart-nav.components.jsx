import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { hideCart } from '../../redux/cart/cart.actions';
import { selectCartTotal } from '../../redux/cart/cart.selector';

import CartProduct from '../cart-product/cart-product.components';

import './cart-nav.styles.scss';

const CartNav = ({
  hideCartNav, cartProducts, total, history,
}) => (
  <div className="cartnav">
    <div className="close" onClick={hideCartNav}>&#10005;</div>
    <div className="cartitems">
      {
        cartProducts.map((cartProduct) => (
          <CartProduct key={cartProduct.timestamp} cartProduct={cartProduct} />
        ))
     }
    </div>
    <div className="discountcode">
      <form>
        <input type="text" placeholder="Discount Code" />
        <input type="submit" value="Apply" />
      </form>
    </div>
    <button
      type="button"
      className="checkout"
      onClick={() => {
        history.push('/checkout');
      }}
    >
      CHECK OUT
      <span>
        £
        {total}
      </span>
    </button>
  </div>
);
const mapStateToProps = (state) => ({
  cartProducts: state.cart.cartProducts,
  total: selectCartTotal(state),
});

const mapDispatchToProps = (dispatch) => ({
  hideCartNav: () => dispatch(hideCart()),
});

CartNav.propTypes = {
  hideCartNav: PropTypes.func.isRequired,
  cartProducts: PropTypes.shape({
    timestamp: PropTypes.string,
    cartProduct: PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      emboseprice: PropTypes.number,
      text: PropTypes.string,
    }).isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartNav));
