import React from 'react';

import MenuItem from '../menu-item/menu-item.components';

import './blogcategory.styles.scss';

class Blogcategory extends React.Component{
    constructor(){
        super();

        this.state={
            sections:[
                {
                    id: 1,
                    title: 'backpacks',
                    imgUrl: require('../../assets/backpacks.jpg'),
                    linkUrl:'categorys/backpacks'
                },
                {
                    id: 2,
                    title: 'handbags',
                    imgUrl: require('../../assets/handbags.jpg'),
                    linkUrl:'handbags/backpacks'
                },
                {
                    id: 3,
                    title: 'stachels',
                    imgUrl: require('../../assets/stachels.jpg'),
                    linkUrl:'stachels/backpacks'
                }
            ]
        }
    }
    render(){
        return(
            <div className='blog'>
                { this.state.sections.map(({ id, title, imgUrl, linkUrl }) => (
                <MenuItem key={id} title={title} imgUrl={imgUrl} linkUrl={linkUrl}/>))}
            </div>
        )
    }
};

export default Blogcategory;