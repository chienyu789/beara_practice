import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import './collections.styles.scss';

const CollectionPage = ({ collections }) => (
  <div>
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

CollectionPage.propTypes = {
  collections: PropTypes.objectOf({
    category: PropTypes.objectOf({
      items: PropTypes.array.isRequired,
    }),
  }),
};

CollectionPage.defaultProps = {
  collections: undefined,
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps)(CollectionPage);
