import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import './dropdown-list.styles.scss';

const DropdownList = ({ id, subtitle, linkUrl }) => (
  <div className="nav">
    <Link className="navlink" to={linkUrl} key={id}>
      { subtitle }
    </Link>
  </div>
);

DropdownList.propTypes = {
  id: PropTypes.number.isRequired,
  subtitle: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

export default DropdownList;
