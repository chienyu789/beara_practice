import React,{ useState } from 'react';
import { withRouter } from 'react-router-dom';

import ImgMove from '../imgmove/imgmove.components';
import TextContainer from '../text-container/text-container.components';

import './menu-item.styles.scss';

const MenuItem = ({title, imgUrl, history , linkUrl , match}) =>{
    const [ positionState, setpositionState ] = useState({ x: 0, y: 0, active: false});

    const onMouseMove = ( e ) => (
        setpositionState({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY, active: true})
    );
    const onMouseLeve = (e) => (
        setpositionState({x:0, y:0, active: false})
    )

    return (
        <div className='menu-item'
          onMouseMove={onMouseMove}
          onMouseOut={onMouseLeve}
          onClick={()=>history.push(`${match.url}${linkUrl}`)}
          >
            <ImgMove title={title} imgUrl={imgUrl} x={positionState.x} y={positionState.y}/>
            <TextContainer x={positionState.x} y={positionState.y}/>
        </div>
          )    
   
};

export default withRouter(MenuItem);