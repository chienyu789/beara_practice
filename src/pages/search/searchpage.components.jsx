import React from 'react';

import { Link } from 'react-router-dom';

import './searchpage.styles.scss';

const SearchPage = ({ history }) => {
  const list = history.location.state.matchlist;
  console.log(list);
  return (
    <div className="collections">
      {
        list.map((item) => (
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

export default SearchPage;
