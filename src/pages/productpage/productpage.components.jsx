import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectProduct } from '../../redux/shop/shop.selector';
import { addProduct, showCart } from '../../redux/cart/cart.actions';

import CustomiseButton from '../../components/customise-button/customise-button.components';

import './productpage.styles.scss';

const giftimg = require('../../assets/wrapping-paper.jpg');

const ProductPage = ({ product, addProductToCart, showCartNav }) => {
  const {
    id, name, imgUrl, price,
  } = product;
  const gift = {
    id: 'gift', title: 'gift', name: 'gift', imgUrl: giftimg, price: 6,
  };
  const [seenState, setseenState] = useState(false);
  const toggleCustomise = () => {
    setseenState(!seenState);
  };
  return (
    <div className="product-page">
      <div className="product-detail" key={id}>
        <img src={imgUrl} alt={id} />
        <span className="product-name">{ name }</span>
        <span className="product-price">
          £
          { price }
        </span>
      </div>
      <div className="selectbutton">
        <button type="button" className="customisebutton" onClick={() => { addProductToCart(gift); showCartNav(); }}>GIFT WRAPPING(£6)</button>
        <button type="button" className="customisebutton" onClick={toggleCustomise}>EMBOSSING(£15)</button>
        <button type="button" className="addbutton" onClick={() => { addProductToCart(product); showCartNav(); }}>ADD TO CART</button>
      </div>
      { seenState ? <CustomiseButton closeClick={toggleCustomise} product={product} /> : null}
      { seenState ? <div className="cover" /> : null}
    </div>
  );
};

ProductPage.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imgUrl: PropTypes.string,
    price: PropTypes.number,
  }),
  addProductToCart: PropTypes.func.isRequired,
  showCartNav: PropTypes.func.isRequired,
};
ProductPage.defaultProps = {
  product: null,
};

const mapStateToProps = (state, ownProps) => ({
  product: selectProduct(ownProps.match.params.categoryId, ownProps.match.params.productId)(state),
});

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch(addProduct(product)),
  showCartNav: () => dispatch(showCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
