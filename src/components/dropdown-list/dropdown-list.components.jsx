import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// import './dropdown-list.styles.scss';
import { Nav, NavLink } from './dropdown-list.styles';

const DropdownList = ({ id, subtitle, linkUrl }) => (
  <Nav>
    <NavLink to={process.env.PUBLIC_URL + linkUrl} key={id}>
      { subtitle }
    </NavLink>
  </Nav>
);

DropdownList.propTypes = {
  id: PropTypes.number,
  subtitle: PropTypes.object.isRequired,
  linkUrl: PropTypes.string.isRequired,
};

DropdownList.defaultProps = {
  id: 0,
};

export default DropdownList;
