import React from 'react';

import Shanghai1 from '../../assets/shanghai1.jpg';
import Shanghai2 from '../../assets/shanghai2.jpg';
import Shanghai3 from '../../assets/shanghai3.jpg';
import Shanghai4 from '../../assets/shanghai4.jpg';
import Shanghai5 from '../../assets/shanghai5.jpg';
import Shanghai6 from '../../assets/shanghai6.jpg';
import Shanghai7 from '../../assets/shanghai7.jpg';

import './shanghai-store.styles.scss';

const ShanghaiStore = () => (
  <div className="stores">
    <div className="store">
      <img src={Shanghai1} alt="shanghai" />
      <div className="storename">Shanghai Store</div>
    </div>
    <div className="content">
      Our Shanghai showroom is located on a quiet backstreet close to Nanjing Xi Lu
      the converted townhouse has a peaceful charm.
      We welcome everyone to call by, relax and have a closer look at our bags.
    </div>
    <div className="detail">
      <div className="box">
        OPENING HOURS
        <br />
        —
        <br />
        Monday to Thursday 10:30am - 7:30pm
        <br />
        Friday to Sunday 11:00am - 8:00pm
        <br />
      </div>
      <div className="box">
        <img src={Shanghai2} alt="shanghai2" />
      </div>
      <div className="box">
        <img src={Shanghai3} alt="shanghai3" />
      </div>
      <div className="box">
        ADDRESS
        <br />
        —
        <br />
        No.4 Front Door
        <br />
        227 TaiXing Road
        <br />
        Jing'an District
        <br />
        Shanghai, China
        <br />
        +86 18017436529
        <br />
        storesh@bearabeara.co.uk
        <br />
        GET DIRECTION
        <br />
      </div>
      <div className="box">
        <img src={Shanghai4} alt="shanghai4" />
      </div>
      <div className="box">
        <img src={Shanghai5} alt="shanghai5" />
      </div>
      <div className="box">
        <img src={Shanghai6} alt="shanghai6" />
      </div>
      <div className="box">
        <img src={Shanghai7} alt="shanghai7" />
      </div>
    </div>
  </div>
);

export default ShanghaiStore;
