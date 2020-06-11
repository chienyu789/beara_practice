import React,{ useState } from 'react';

import ImgMove from '../imgmove/imgmove.components';

import './menu-item.styles.scss';

// const MenuItem = ({title, imgUrl}) =>(
//     <div className='menu-item'>
//         {/* <div className='background-img' style={{backgroundImage:`url(${imgUrl})`}}/> */}
//         {/* <div className='background-img'> */}
//         <MouseMove imgUrl={imgUrl}/>
//         {/* </div> */}
//         {/* <div className='overlay'/> */}
//         <div className='text-container'>
//         <span className='title'>{title.toUpperCase()}</span>
//         </div>
//     </div>
    
// );

const MenuItem = ({title, imgUrl}) =>{
    const [ positionState, setpositionState ] = useState({ x: 0, y: 0});

    const onMouseMove = ( e ) => (
        setpositionState({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
    );
    return (
        <div className='menu-item' onMouseMove={onMouseMove}>
            {/* <div className='overlay'/> */}
            <ImgMove imgUrl={imgUrl} x={positionState.x} y={positionState.y}/>       
            <div className='text-container'>
                <span className='title'>{title.toUpperCase()}</span>
            </div>

        </div>
          )    
   
};

export default MenuItem;