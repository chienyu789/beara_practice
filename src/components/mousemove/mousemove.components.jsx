import React, { useState } from 'react';

const MouseMove = ({imgUrl}) => {
    const [ positionState, setpositionState ] = useState({ x: 0, y: 0});

    const onMouseMove = ( e ) => (
        setpositionState({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
    );

    return (
        <div>
          <img onMouseMove={onMouseMove} src={imgUrl} alt='test'/>
          <span>{positionState.x}</span><br/>
          <span>{positionState.y}</span>
        </div>
          )
};


export default MouseMove;