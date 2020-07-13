import React from 'react';
import PropTypes from 'prop-types';

import './imgmove.styles.scss';
import { Move, Image, Overlay, Title, Subtitle } from './imgmove.styles';

const ImgMove = ({
  title, subtitle, imgUrl, x, y, active,
}) => {
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
    transform: `translate(${active ? xx * 0.2 : 0}px, ${active ? yy * 0.2 : 0}px)`,
  };
  return (
    <Move style={styles}>
      <Image src={imgUrl} alt="test" />
      <Overlay />
      <Title>{title.toUpperCase()}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Move>
  );
};

ImgMove.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  active: PropTypes.bool.isRequired,
};

export default ImgMove;
