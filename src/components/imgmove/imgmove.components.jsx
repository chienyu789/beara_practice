import React from 'react';
import PropTypes from 'prop-types';

import './imgmove.styles.scss';

const ImgMove = ({
  title, subtitle, imgUrl, x, y,
}) => {
  const styles = {
    transition: 'all 0.5s ease 0s',
    transform: `translate(${x * 0.1}px, ${y * 0.2}px)`,
  };
  return (
    <div className="move" style={styles}>
      <img src={imgUrl} alt="test" />
      <div className="overlay" />
      <span className="title">{title.toUpperCase()}</span>
      <span className="subtitle">{subtitle}</span>
    </div>
  );
};

ImgMove.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

export default ImgMove;
