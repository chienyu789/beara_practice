import React from 'react';

import DropdownList from '../dropdown-list/dropdown-list.components';
import './dropdownstore.styles.scss';

class DropDownStore extends React.Component {
  constructor() {
    super();

    this.state = {
      store: [
        {
          id: 1,
          title: 'OUR STORE',
          subtitle: 'London Store',
          linkUrl: '/london-store',
        },
        {
          id: 2,
          title: 'OUR STORE',
          subtitle: 'Shanghai Store',
          linkUrl: '/shanghai-store',
        },
      ],
    };
  }

  render() {
    const { store } = this.state;
    return (
      <div className="store">
        { store.map(({ id, subtitle, linkUrl }) => (
          <DropdownList key={id} subtitle={subtitle} linkUrl={linkUrl} />))}
      </div>
    );
  }
}

export default DropDownStore;
