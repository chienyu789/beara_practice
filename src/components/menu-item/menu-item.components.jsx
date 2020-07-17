import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import ImgMove from '../imgmove/imgmove.components';
import TextContainer from '../text-container/text-container.components';

import './menu-item.styles.scss';
import { Menu } from './menu-item.styles';

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
    <Menu className="menu-item"
      onMouseMove={onMouseMove}
      onMouseOut={onMouseLeve}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <ImgMove title={title} subtitle={subtitle} imgUrl={imgUrl} x={positionState.x} y={positionState.y} active={positionState.active} />
      <TextContainer x={positionState.x} y={positionState.y} active={positionState.active} />
    </Menu>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
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

MenuItem.defaultProps = {
  subtitle: null,
};

export default withRouter(MenuItem);
