import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { showCart } from '../../redux/cart/cart.actions';
import { selectCartCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/carticon.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ showCartNav, count }) => (
  <div className="cart" onClick={showCartNav}>
    <ShoppingIcon />
    <span>{ count }</span>
  </div>
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
