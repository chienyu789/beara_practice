import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDropdownBags } from '../../redux/dropdownbags/dropdownbags.selector';

import DropdownList from '../dropdown-list/dropdown-list.components';

import './dropdownbags.styles.scss';

const DropDownBags = ({ bags }) => (
  <div className="bag">
    {
    bags.map(({ id, subtitle, linkUrl }) => (
      <DropdownList key={id} subtitle={subtitle} linkUrl={linkUrl} />))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  bags: selectDropdownBags,
});

DropDownBags.propTypes = {
  bags: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(DropDownBags);
