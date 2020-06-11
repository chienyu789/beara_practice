import React,{ useState } from 'react';

import MouseMove from '../mousemove/mousemove.components';

import './menu-item.styles.scss';

const MenuItem = ({title, imgUrl}) =>(
    <div className='menu-item'>
        {/* <div className='background-img' style={{backgroundImage:`url(${imgUrl})`}}/> */}
        {/* <div className='background-img'> */}
        <MouseMove imgUrl={imgUrl}/>
        {/* </div> */}
        <div className='overlay'/>
        <div className='text-container'>
        <span className='title'>{title.toUpperCase()}</span>
        </div>
    </div>
    
);

// const MenuItem = ({title, imgUrl}) =>{
//     const [ positionState, setpositionState ] = useState({ x: 0, y: 0});

//     const onMouseMove = ( e ) => (
//         setpositionState({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
//     );
//     console.log(positionState.x)
//     return (
//         <div className='menu-item'onMouseMove={onMouseMove} >
//             <div className='overlay'/>
//             <img src={imgUrl} alt='test'/><br/>        
//             <div className='text-container'>
//                 <span className='title'>{title.toUpperCase()}</span>
//             </div>
//             <span>{positionState.x}</span><br/>
//             <span>{positionState.y}</span>
//         </div>
//           )    
   
// };

export default MenuItem;