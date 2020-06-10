import React from 'react';

import MouseMove from '../mousemove/mousemove.components';

import './menu-item.styles.scss';

const MenuItem = ({title, imgUrl}) =>(
    <div className='menu-item'>
        <div className='background-img' style={{backgroundImage:`url(${imgUrl})`}}/>
        {/* <div className='background-img'>
        <MouseMove imgUrl={imgUrl}/>
        </div> */}
        <div className='overlay'/>
        <div className='text-container'>
        <span className='title'>{title.toUpperCase()}</span>
        </div>
    </div>
    
);

export default MenuItem;