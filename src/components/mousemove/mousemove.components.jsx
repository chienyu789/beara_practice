import React, { useState } from 'react';
import { useEffect } from 'react';

const MouseMove = ({imgUrl}) => {
    const [ positionState, setpositionState ] = useState({ x: 0, y: 0});

    const onMouseMove = ( e ) => (
        setpositionState({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
    );
    useEffect(() =>{
      console.log('aaa')
    },[])
    // useEffect ( () => {
    //   window.addEventListener('mousemove', onMouseMove);

    //   return () => {
    //   window.removeEventListener('mousemove', onMouseMove);
    // };
    // },[ onMouseMove ]);
    console.log(positionState.x);
    return (
        <div>
          <img onMouseMove={onMouseMove} src={imgUrl} alt='test'/><br/>
        {/* <div onMouseMove={onMouseMove} style={{backgroundImage:`url(${imgUrl})`}}/> */}
          <span>{positionState.x}</span><br/>
          <span>{positionState.y}</span>
        </div>
        
          )
};


export default MouseMove;