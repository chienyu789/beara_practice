import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

const SearchFilter = ({ collections, history }) => {
  const data = collections;
  const [searchState, setsearchState] = useState('');
  const [matchState, setmatchState] = useState('');

  const searchHandler = (e) => {
    setsearchState(e.target.value);
  };

  const filterList = () => {
    const list = data.map((category) => category.items.filter((item) => item.name.includes(searchState.toUpperCase())));
    const merged = [].concat(...list);
    setmatchState(merged);
  };
  return (
    <div>
      <form>
        <input type="text" name="bag" placeholder="Search..." onChange={searchHandler} />
        <input
          type="button"
          value="&#10132;"
          onClick={() => { filterList(); history.push(process.env.PUBLIC_URL + '/search', { matchlist: matchState}); }}
        />
      </form>
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

const category = PropTypes.shape({
  id: PropTypes.number,
  items: PropTypes.arrayOf(item),
  routeName: PropTypes.string,
  title: PropTypes.string,
  videoUrl: PropTypes.string,
});

SearchFilter.propTypes = {
  collections: PropTypes.arrayOf(category),
};

SearchFilter.defaultProps = {
  collections: undefined,
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default withRouter(connect(mapStateToProps)(SearchFilter));
