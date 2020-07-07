import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';

import { selectCollections } from '../../redux/shop/shop.selector';

import CollectionPage from '../../components/collection/collections.components';
import Category from '../category/category.components';

import './shoppage.styles.scss';

const ShopPage = ({ match }) => (
  <div className="products">
    <Route exact path={`${match.path}/all-products`} component={CollectionPage} />
    <Route path={`${match.path}/:categoryId`} component={Category} />
  </div>
);

ShopPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      path: PropTypes.string,
      url: PropTypes.string,
    }),
  }),
};

ShopPage.defaultProps = {
  match: null,
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
