import React from 'react';
import { FormattedMessage } from 'react-intl';

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
          subtitle: <FormattedMessage id="drop.london" />,
          linkUrl: '/london-store',
        },
        {
          id: 2,
          title: 'OUR STORE',
          subtitle: <FormattedMessage id="drop.shanghai" />,
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
