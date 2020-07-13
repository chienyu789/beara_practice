import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showCart } from '../../redux/cart/cart.actions';
import { selectCartCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/carticon.svg';

import { Cart, CartTotal } from './cart-icon.styles';

const CartIcon = ({ showCartNav, count }) => (
  <Cart onClick={showCartNav}>
    <ShoppingIcon />
    <CartTotal>{ count }</CartTotal>
  </Cart>
);

const mapDispatchToProps = (dispatch) => ({
  showCartNav: () => dispatch(showCart()),
});

const mapStateToProps = (state) => ({
  count: selectCartCount(state),
});

CartIcon.propTypes = {
  showCartNav: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
