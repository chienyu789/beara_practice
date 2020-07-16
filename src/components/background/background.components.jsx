import React from 'react';
import PropTypes from 'prop-types';

import './background.styles.scss';
import { BackgroundImage } from './background.styles';

const Background = ({ imgUrl }) => (
  <BackgroundImage style={{ backgroundImage: `url(${imgUrl})` }} />
);

Background.propTypes = {
  imgUrl: PropTypes.string.isRequired,
};

export default Background;
