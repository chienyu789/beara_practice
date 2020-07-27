import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDropdownBags } from '../../redux/dropdownbags/dropdownbags.selector';

import DropdownList from '../dropdown-list/dropdown-list.components';
import SearchFilter from '../searchfilter/searchfilter.components';

import './dropdownbags.styles.scss';

const DropDownBags = ({ bags, HeaderToggle }) => (
  <div className="bag">
    <SearchFilter HeaderToggle={HeaderToggle} />
    {
    bags.map(({ id, subtitle, linkUrl }) => (
      <DropdownList key={id} subtitle={subtitle} linkUrl={linkUrl} HeaderToggle={HeaderToggle} />))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  bags: selectDropdownBags,
});

const bag = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.element.isRequired,
  linkUrl: PropTypes.string.isRequired,
});

DropDownBags.propTypes = {
  bags: PropTypes.arrayOf(bag).isRequired,
  HeaderToggle: PropTypes.func,
};

DropDownBags.defaultProps = {
  HeaderToggle: undefined,
};

export default connect(mapStateToProps)(DropDownBags);
