import React from 'react';

import './text-container.styles.scss';

const TextContainer = ({x, y}) =>{
    
    const styles = { 
      transition: `all 0.5s ease 0s`,
      // transition: `transform .3s ease-in-out`,
      transform: `translate(${x*0.1}px, ${y*0.1}px)` 
    };
        return(
            <div className='text-container' style={styles}/>
)};

export default TextContainer;