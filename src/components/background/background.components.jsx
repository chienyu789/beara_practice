import React from 'react';
import PropTypes from 'prop-types';

import './background.styles.scss';

const Background = ({ imgUrl }) => (
  <div className="background-image" style={{ backgroundImage: `url(${imgUrl})` }} />
);

Background.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default Background;
