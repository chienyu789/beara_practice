import React from 'react';

import './three-grid.styles.scss';

class ThreeGrid extends React.Component {
  constructor() {
    super();

    this.state = {
      customises: [
        {
          id: 1,
          imgUrl: require('../../assets/customise9-1.jpg'), // eslint-disable-line global-require
        },
        {
          id: 2,
          imgUrl: require('../../assets/customise9-2.jpg'), // eslint-disable-line global-require
        },
        {
          id: 3,
          imgUrl: require('../../assets/customise9-3.jpg'), // eslint-disable-line global-require
        },
        {
          id: 4,
          imgUrl: require('../../assets/customise9-4.jpg'), // eslint-disable-line global-require
        },
        {
          id: 5,
          imgUrl: require('../../assets/customise9-5.jpg'), // eslint-disable-line global-require
        },
        {
          id: 6,
          imgUrl: require('../../assets/customise9-6.jpg'), // eslint-disable-line global-require
        },
        {
          id: 7,
          imgUrl: require('../../assets/customise9-7.jpg'), // eslint-disable-line global-require
        },
        {
          id: 8,
          imgUrl: require('../../assets/customise9-8.jpg'), // eslint-disable-line global-require
        },
        {
          id: 9,
          imgUrl: require('../../assets/customise9-9.jpg'), // eslint-disable-line global-require
        },
      ],
    };
  }

  render() {
    const { customises } = this.state;
    return (
      <div className="grid">
        {
            customises.map(({ id, imgUrl }) => (
              <div className="grid-box" key={id}>
                <img src={imgUrl} alt={`customise-${id}`} />
              </div>
            ))
        }
      </div>
    );
  }
}

export default ThreeGrid;
