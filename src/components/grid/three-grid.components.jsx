import React from 'react';

import './three-grid.styles.scss'

class ThreeGrid extends React.Component{
    constructor(){
        super();

        this.state={
            customises:[
                {
                    id:1,
                    imgUrl:require('../../assets/customise9-1.jpg')
                },
                {
                    id:2,
                    imgUrl:require('../../assets/customise9-2.jpg')
                },
                {
                    id:3,
                    imgUrl:require('../../assets/customise9-3.jpg')
                },
                {
                    id:4,
                    imgUrl:require('../../assets/customise9-4.jpg')
                },
                {
                    id:5,
                    imgUrl:require('../../assets/customise9-5.jpg')
                },
                {
                    id:6,
                    imgUrl:require('../../assets/customise9-6.jpg')
                },
                {
                    id:7,
                    imgUrl:require('../../assets/customise9-7.jpg')
                },
                {
                    id:8,
                    imgUrl:require('../../assets/customise9-8.jpg')
                },
                {
                    id:9,
                    imgUrl:require('../../assets/customise9-9.jpg')
                }
            ]
        }
    }

    render(){
        return(
            <div className='grid'>
                {
                    this.state.customises.map(({id, imgUrl})=>
                    <div className='grid-box'>
                        <img src={imgUrl} alt={`customise-${id}`}/>
                    </div>
                    )
                }
            </div>
        )
    }
}

export default ThreeGrid;