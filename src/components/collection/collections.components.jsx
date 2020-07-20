import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import './collections.styles.scss';

const CollectionPage = ({ collections }) => (
  <div className="collections">
    {
      collections.map(({ items }) => items.map((item) => (
        <div key={item.id} className="collectionitem">
          <Link to={process.env.PUBLIC_URL + item.linkUrl}>
            <img src={item.imgUrl} alt={item.name} />
          </Link>
          <span>{item.name}</span>
          <span>
            £
            {item.price}
          </span>
        </div>
      )))
    }
  </div>
);

const item = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  linkUrl: PropTypes.string,
  price: PropTypes.number,
});

const category = PropTypes.shape({
  id: PropTypes.number,
  items: PropTypes.arrayOf(item),
  routeName: PropTypes.string,
  title: PropTypes.string,
  videoUrl: PropTypes.string,
});

CollectionPage.propTypes = {
  collections: PropTypes.arrayOf(category),
};

CollectionPage.defaultProps = {
  collections: undefined,
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionPage);
