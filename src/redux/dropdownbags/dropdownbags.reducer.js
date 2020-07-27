import React from 'react';
import { FormattedMessage } from 'react-intl';

const INITIAL_STATE = {
  bags: [
    {
      id: 1,
      title: 'BAGS',
      subtitle: <FormattedMessage id="drop.all" />,
      linkUrl: '/category/all-products',
    },
    {
      id: 2,
      title: 'BAGS',
      subtitle: <FormattedMessage id="drop.backpacks" />,
      linkUrl: '/category/backpacks',
    },
    {
      id: 3,
      title: 'BAGS',
      subtitle: <FormattedMessage id="drop.satchels" />,
      linkUrl: '/category/satchels',
    },
    {
      id: 4,
      title: 'BAGS',
      subtitle: <FormattedMessage id="drop.handbags" />,
      linkUrl: '/category/handbags',
    },
    {
      id: 5,
      title: 'BAGS',
      subtitle: <FormattedMessage id="drop.mens" />,
      linkUrl: '/category/mens',
    },
    {
      id: 6,
      title: 'BAGS',
      subtitle: <FormattedMessage id="drop.laptopcase" />,
      linkUrl: '/category/laptopcases',
    },
    {
      id: 7,
      title: 'BAGS',
      subtitle: <FormattedMessage id="drop.wallets" />,
      linkUrl: '/category/wallets',
    },
    {
      id: 8,
      title: 'BAGS',
      subtitle: <FormattedMessage id="drop.other" />,
      linkUrl: '/category/other',
    },
  ],
};

const dropdownbagsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default dropdownbagsReducer;
