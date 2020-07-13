import React from 'react';

import MenuItem from '../menu-item/menu-item.components';

import './directory.styles.scss';
import { Category } from './directory.styles';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: 'backpacks',
          imgUrl: require('../../assets/backpacks.jpg'), // eslint-disable-line global-require
          linkUrl: 'category/backpacks',
        },
        {
          id: 2,
          title: 'handbags',
          imgUrl: require('../../assets/handbags.jpg'), // eslint-disable-line global-require
          linkUrl: 'category/handbags',
        },
        {
          id: 3,
          title: 'stachels',
          imgUrl: require('../../assets/stachels.jpg'), // eslint-disable-line global-require
          linkUrl: 'category/stachels',
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <Category>
        { sections.map(({
          id, title, imgUrl, linkUrl,
        }) => (
          <MenuItem key={id} title={title} imgUrl={imgUrl} linkUrl={linkUrl} />))}
      </Category>
    );
  }
}

export default Directory;
