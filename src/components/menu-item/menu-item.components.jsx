import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ImgMove from '../imgmove/imgmove.components';
import TextContainer from '../text-container/text-container.components';

import './menu-item.styles.scss';

const MenuItem = ({
  title, subtitle, imgUrl, history, linkUrl, match,
}) => {
  const [positionState, setpositionState] = useState({ x: 0, y: 0, active: false });

  const onMouseMove = (e) => (
    setpositionState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY, active: true })
  );
  const onMouseLeve = () => (
    setpositionState({ x: 0, y: 0, active: false })
  );

  return (
    <div className="menu-item"
      onMouseMove={onMouseMove}
      onMouseOut={onMouseLeve}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <ImgMove title={title} subtitle={subtitle} imgUrl={imgUrl} x={positionState.x} y={positionState.y} />
      <TextContainer x={positionState.x} y={positionState.y} />
    </div>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  linkUrl: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      url: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default withRouter(MenuItem);
