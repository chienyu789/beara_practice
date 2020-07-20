import React from 'react';
import PropTypes from 'prop-types';

import Background from '../background/background.components';
import HomeContainer from '../homepage-container/homepage-container.components';

import './homepage-back.styles.scss';

class HomeBack extends React.Component {
  constructor() {
    super();

    this.state = {
      backs: [
        {
          id: 1,
          imgUrl: require('../../assets/homepagebackground.jpg'), // eslint-disable-line global-require
        },
        {
          id: 2,
          imgUrl: require('../../assets/homepagebackground2.jpg'), // eslint-disable-line global-require
        },
        {
          id: 3,
          imgUrl: require('../../assets/homepagebackground3.jpg'), // eslint-disable-line global-require
        },
      ],
    };
  }

  render() {
    const { backs } = this.state;
    const { show } = this.props;
    return (
      <div className="backs">
        {
            backs.map(({ id, imgUrl }) => <Background key={id} imgUrl={imgUrl} />)
        }
        <HomeContainer show={show} />
      </div>
    );
  }
}

HomeBack.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default HomeBack;
