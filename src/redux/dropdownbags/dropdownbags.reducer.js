const INITIAL_STATE = {
  bags: [
    {
      id: 1,
      title: 'BAGS',
      subtitle: 'ALL',
      linkUrl: '/category/all-products',
    },
    {
      id: 2,
      title: 'BAGS',
      subtitle: 'BACKPACKS',
      linkUrl: '/category/backpacks',
    },
    {
      id: 3,
      title: 'BAGS',
      subtitle: 'STACHELS',
      linkUrl: '/category/stachels',
    },
    {
      id: 4,
      title: 'BAGS',
      subtitle: 'HANDBAGS',
      linkUrl: '/category/handbags',
    },
    {
      id: 5,
      title: 'BAGS',
      subtitle: 'MENS',
      linkUrl: '/category/mens',
    },
    {
      id: 6,
      title: 'BAGS',
      subtitle: 'LAPTOP CASES',
      linkUrl: '/category/laptopcases',
    },
    {
      id: 7,
      title: 'BAGS',
      subtitle: 'WALLETS',
      linkUrl: '/category/wallets',
    },
    {
      id: 8,
      title: 'BAGS',
      subtitle: 'OTHER',
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