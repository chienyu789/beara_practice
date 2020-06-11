import React from 'react';

import './imgmove.styles.scss';

const ImgMove = ({imgUrl, x, y}) =>{
    // const [ positionState, setpositionState ] = useState({ x: 0, y: 0});

    // const onMouseMove = ( e ) => (
    //     setpositionState({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
    // );
    const styles = { 
      transform: `translate(${x*0.1}px, ${y*0.2}px)` 
    };
        return(
        <div style={styles}>
          <img src={imgUrl} alt='test'/>
          <div className='overlay'/>
          {/* <span>{x}</span>
          <span>{y}</span> */}
        </div>
        
  
)};


export default ImgMove;