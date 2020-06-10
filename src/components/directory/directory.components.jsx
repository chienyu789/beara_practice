import React from 'react';

import MenuItem from '../menu-item/menu-item.components';

import './directory.styles.scss';


class Directory extends React.Component{
    constructor(){
        super();

        this.state={
            sections:[
                {
                    id: 1,
                    title: 'backpacks',
                    imgUrl: require('../../assets/backpacks.jpg')
                },
                {
                    id: 2,
                    title: 'handbags',
                    imgUrl: require('../../assets/handbags.jpg')
                },
                {
                    id: 3,
                    title: 'stachels',
                    imgUrl: require('../../assets/stachels.jpg')
                }
            ]
        }
    }
    render(){
        return(
            <div className='directory'>
                { this.state.sections.map(({ id, title, imgUrl }) => (
                <MenuItem key={id} title={title} imgUrl={imgUrl}/>))}
            </div>
        )
    }
};

export default Directory;