import React from 'react';

import Background from '../background/background.components';

import './homepage-back.styles.scss';

class HomeBack extends React.Component{
    constructor(){
        super();

        this.state={
            backs:[
                {
                    id:1,
                    imgUrl: require('../../assets/homepagebackground.jpg')
                },
                {
                    id:2,
                    imgUrl: require('../../assets/homepagebackground2.jpg')
                },
                {
                    id:3,
                    imgUrl: require('../../assets/homepagebackground3.jpg')
                }
            ]
        }
    }
    render(){
        return(
            <div className='backs'>
                {
                    this.state.backs.map(({ id, imgUrl }) => <Background key={id} imgUrl={imgUrl}/>)   
                }
            </div>
        )
    }
};

export default HomeBack;