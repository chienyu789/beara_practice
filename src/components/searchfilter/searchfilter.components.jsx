import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCollectionForPreview } from '../../redux/shop/shop.selector';

import './searchfilter.styles.scss';

const SearchFilter = ({ collections, history, HeaderToggle }) => {
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
    console.log('execute');
  };

  const keyHandler = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      filterList();
    }
  };

  const firstRun = useRef(true);
  useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
      return;
    }
    history.push(process.env.PUBLIC_URL + '/search?bag=' + searchState, { matchlist: matchState });
    if (HeaderToggle) {
      HeaderToggle();
    }
  }, [matchState]);

  return (
    <div className="searchfilter">
      <form className="formser">
        <input type="text" name="bag" placeholder="Search..." onChange={searchHandler} onKeyDown={keyHandler} />
        <input
          type="button"
          value="&#10132;"
          onClick={() => filterList()}
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
  HeaderToggle: PropTypes.func,
};

SearchFilter.defaultProps = {
  collections: undefined,
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default withRouter(connect(mapStateToProps)(SearchFilter));
