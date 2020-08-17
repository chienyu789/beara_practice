import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';

import { selectCollections } from '../../redux/shop/shop.selector';
// import { updateCollections } from '../../redux/shop/shop.action';
// import { SnapshotToObject } from '../../firebase/firebase.utils';

import CollectionPage from '../../components/collection/collections.components';
import Category from '../category/category.components';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import './shoppage.styles.scss';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CategoryWithSpinner = WithSpinner(Category);

const ShopPage = ({ match, loading }) => (
  <div className="products">
    <Route exact path={`${match.path}/all-products`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
    <Route path={`${match.path}/:categoryId`} render={(props) => <CategoryWithSpinner isLoading={loading} {...props} />} />
  </div>
);

ShopPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
};

ShopPage.defaultProps = {
  match: null,
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
