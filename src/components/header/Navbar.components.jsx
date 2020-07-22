import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import DropDownBag from '../dropdownbags/dropdownbags.components';
import DropDownStore from '../dropdownstore/dropdownstore.components';
// import SearchFilter from '../searchfilter/searchfilter.components';

import { Options, Overlay, NavLanguage, Submenu } from './header.styles';

const Navbar = ({ languageSelect, HeaderToggle, style }) => (
  <Overlay style={style}>
    <NavLanguage>
      <button type="button" onClick={() => languageSelect('en')}>UK </button>
      <span>|</span>
      <button type="button" onClick={() => languageSelect('zh')}>中國</button>
    </NavLanguage>
    <Options to={process.env.PUBLIC_URL + '/category/all-products'} onClick={HeaderToggle}>
      <FormattedMessage id="header.bags" />
    </Options>
    <Submenu>
      <DropDownBag />
    </Submenu>
    <Options to={process.env.PUBLIC_URL + '/customise'} onClick={HeaderToggle}>
      <FormattedMessage id="header.customise" />
    </Options>
    <Options to={process.env.PUBLIC_URL + '/london-store'} onClick={HeaderToggle}>
      <FormattedMessage id="header.stores" />
    </Options>
    <Submenu>
      <DropDownStore HeaderToggle={HeaderToggle} />
    </Submenu>
    <Options to={process.env.PUBLIC_URL + '/our-story'} onClick={HeaderToggle}>
      <FormattedMessage id="header.story" />
    </Options>
  </Overlay>
);

Navbar.propTypes = {
  languageSelect: PropTypes.func.isRequired,
  HeaderToggle: PropTypes.func.isRequired,
  style: PropTypes.shape({
    transform: PropTypes.string.isRequired,
  }).isRequired,
};

export default Navbar;
