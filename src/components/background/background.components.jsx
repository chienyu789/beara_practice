import React from 'react';

import './background.styles.scss';

const Background = ({ imgUrl }) => (
    <div className='background-image' style={{backgroundImage:`url(${imgUrl})`}}/>
);

export default Background;