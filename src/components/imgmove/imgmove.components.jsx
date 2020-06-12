import React from 'react';

import './imgmove.styles.scss';

const ImgMove = ({title, imgUrl, x, y}) =>{
    const styles = { 
      transition: `transform .3s ease-in-out`,
      transform: `translate(${x*0.1}px, ${y*0.2}px)` 
    };
        return(
        <div className='move' style={styles}>
          <img src={imgUrl} alt='test'/>
          <div className='overlay'/>
          <span className='title'>{title.toUpperCase()}</span>
        </div>
        
  
)};


export default ImgMove;