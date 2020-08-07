import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';

import { selectCollections } from '../../redux/shop/shop.selector';
import { updateCollections } from '../../redux/shop/shop.action';
import { SnapshotToObject } from '../../firebase/firebase.utils';

import CollectionPage from '../../components/collection/collections.components';
import Category from '../category/category.components';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import './shoppage.styles.scss';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CategoryWithSpinner = WithSpinner(Category);

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = { loading: true };
  }

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionsMap = SnapshotToObject();
    updateCollections(collectionsMap);
    this.setState({ loading: false });
    console.log('working');
  }

  // const [loading, setloading] = useState(true);
  // useEffect(() => {
  //   const collectionsMap = SnapshotToObject();
  //   updateCollections(collectionsMap);
  //   setloading(false);
  // });
  render() {
    const { match } = this.props;
    const { loading } = this.state;
    console.log(loading);
    return (
      <div className="products">
        <Route exact path={`${match.path}/all-products`} render={(props) => (<CollectionPageWithSpinner isLoading={loading} {...props} />)} />
        <Route path={`${match.path}/:categoryId`} component={Category} />
      </div>
    );
  }
}

ShopPage.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
  }),
};

ShopPage.defaultProps = {
  match: null,
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
