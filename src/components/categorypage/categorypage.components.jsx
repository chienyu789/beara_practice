import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCategory } from '../../redux/shop/shop.selector';

import './categorypage.styles.scss';

const CategoryPage = ({ category }) => {
  if (category === undefined) {
    return null;
  }
  const { title, videoUrl, items } = category;
  return (
    <div>
      <div className="video-container">
        {
              videoUrl
                ? (
                  <iframe src={videoUrl} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen="" title={title} data-ready="true" />
                )
                : null
      }
        <span className="category-title">{title.slice(0, 1) + title.slice(1).toLowerCase()}</span>
      </div>
      {
            items.map((item) => (
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
            ))
        }
    </div>
  );
};

CategoryPage.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string,
    videoUrl: PropTypes.string,
    items: PropTypes.arrayOf({
      id: PropTypes.number,
      title: PropTypes.string,
      name: PropTypes.string,
      imgUrl: PropTypes.string,
      linkUrl: PropTypes.string,
      price: PropTypes.number,
    }),
  }),
};

CategoryPage.defaultProps = {
  category: undefined,
};
const mapStateToProps = (state, ownProps) => ({
  category: selectCategory(ownProps.match.params.categoryId)(state),
});

export default connect(mapStateToProps)(CategoryPage);
