import React from 'react';
import { FormattedMessage } from 'react-intl';

import London1 from '../../assets/london1.jpg';
import London2 from '../../assets/london2.jpg';
import './london-storepage.styles.scss';

const LondonStore = () => (
  <div>
    <div className='stores'>
      <img src={London1} alt='london' />
      <div className='storename'>London store</div>
      <div className='content'>
      <FormattedMessage id="store.london" />
        {/* London has been our home since the beginning and we now find ourselves in a critical time in regards the COVID-19 virus.
        We have taken the difficult decision to close our London store for the foreseeable future. The safety of our customers and our staff are our priority at this time. We will remain upbeat with the belief that this will pass as it has done in China.
        Our Shanghai store has been closed for the past two months, however is due to reopen soon.
        Our online store is working as normal so please feel free to take advantage of our Free UK delivery.
        Thanks for your understanding. We hope everyone stays safe and will come and visit us again soon. */}
      </div>
    </div>
    <div className="product">
      <img src={London2} alt="london" />
    </div>
  </div>
);

export default LondonStore;
