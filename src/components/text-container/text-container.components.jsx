import React from 'react';
import PropTypes from 'prop-types';

import './text-container.styles.scss';

const TextContainer = ({ x, y }) => {
  const styles = {
    transition: 'all 0.5s ease 0s',
    transform: `translate(${x * 0.1}px, ${y * 0.1}px)`,
  };
  return (
    <div className="text-container" style={styles} />
  );
};

TextContainer.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default TextContainer;
