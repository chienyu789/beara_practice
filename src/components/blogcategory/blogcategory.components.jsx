import React from 'react';

import MenuItem from '../menu-item/menu-item.components';

import './blogcategory.styles.scss';

class Blogcategory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          id: 1,
          title: 'bracelets-blog',
          subtitle: 'A classic personalised bracelet comes with embossing included. A piece of natural leather joined by a uniquely designed Beara Beara magnetic clasp.',
          imgUrl: require('../../assets/bracelets.jpg'), // eslint-disable-line global-require
          linkUrl: 'blog/bracelet',
        },
        {
          id: 2,
          title: 'phoenix-blog',
          subtitle: 'Our new launch epitomises the street style. It’s a cool casual. It’s knowing you look cool without making too much effort.',
          imgUrl: require('../../assets/phoenix.jpg'), // eslint-disable-line global-require
          linkUrl: 'blog/phoenix',
        },
        {
          id: 3,
          title: 'love&hope-blog',
          subtitle: 'The Dove represents these two nurturing and uplifting powers of Love and Hope. This is our message of support to you, our community.',
          imgUrl: require('../../assets/loveandhope.jpg'), // eslint-disable-line global-require
          linkUrl: 'blog/loveandhope',
        },
      ],
    };
  }

  render() {
    const { sections } = this.state;
    return (
      <div className="blog">
        { sections.map(({
          id, title, subtitle, imgUrl, linkUrl,
        }) => (
          <MenuItem key={id} title={title} subtitle={subtitle} imgUrl={imgUrl} linkUrl={linkUrl} />
        ))}
      </div>
    );
  }
}

export default Blogcategory;
