import React from 'react';
import PropTypes from 'prop-types';

// import './text-container.styles.scss';
import { TextBox } from './text-container.styles';

const TextContainer = ({ x, y, active }) => {
  let xx = '';
  let yy = '';
  if (x < 150) {
    xx = x - 150;
  } else {
    xx = x;
  }
  if (y < 300) {
    yy = y - 200;
  } else {
    yy = y;
  }
  const styles = {
    transition: 'all 0.5s ease 0s',
    transform: `translate(${active ? xx * 0.1 : 0}px, ${active ? yy * 0.1 : 0}px)`,
  };
  return (
    <TextBox style={styles} />
  );
};

TextContainer.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
};

export default TextContainer;
