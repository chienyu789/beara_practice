import React from 'react';
import { FormattedMessage } from 'react-intl';

import London1 from '../../assets/london1.jpg';
import London2 from '../../assets/london2.jpg';
import './london-storepage.styles.scss';

const LondonStore = () => (
  <div className="stores">
    <div className="store">
      <img src={London1} alt="london" />
      <div className="storename">London store</div>
    </div>
    <div className="content">
      <FormattedMessage id="store.london" />
    </div>
    <div className="product">
      <img src={London2} alt="london" />
    </div>
  </div>
);

export default LondonStore;
