import { createSelector } from 'reselect';

const selectDropdownbags = (state) => state.dropdownbags;

export const selectDropdownBags = createSelector(
  [selectDropdownbags],
  (dropdownbags) => dropdownbags.bags,
);
