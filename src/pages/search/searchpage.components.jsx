import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './searchpage.styles.scss';

const SearchPage = ({ history }) => {
  const list = history.location.state.matchlist;
  return (
    <div className="search">
      {
        list.length > 0
          ? list.map((item) => (
            <div key={item.id} className="searchitem">
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
          : <span>no product</span>
      }
    </div>
  );
};

const item = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  name: PropTypes.string,
  imgUrl: PropTypes.string,
  linkUrl: PropTypes.string,
  price: PropTypes.number,
});

SearchPage.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
      state: PropTypes.shape({
        matchlist: PropTypes.arrayOf(item),
      }),
    }),
  }),
};

SearchPage.defaultProps = {
  history: {
    location: {
      pathname: '/search',
      search: '?bag=',
      state: {
        matchlist: [],
      },
    },
  },
};

export default SearchPage;
