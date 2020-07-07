import React from 'react';
import PropTypes from 'prop-types';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './homepage-container.styles.scss';

const HomeContainer = ({ show }) => (
  <div className="position">
    {
        show
          ? <Logo className="logo" />
          : null
    }
  </div>
);

HomeContainer.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default HomeContainer;
