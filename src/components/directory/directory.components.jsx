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
                    imgUrl: require('../../assets/backpacks.jpg'),
                    linkUrl:'category/backpacks'
                },
                {
                    id: 2,
                    title: 'handbags',
                    imgUrl: require('../../assets/handbags.jpg'),
                    linkUrl:'category/handbags'
                },
                {
                    id: 3,
                    title: 'stachels',
                    imgUrl: require('../../assets/stachels.jpg'),
                    linkUrl:'category/stachels'
                }
            ]
        }
    }
    render(){
        return(
            <div className='directory'>
                { this.state.sections.map(({ id, title, imgUrl, linkUrl }) => (
                <MenuItem key={id} title={title} imgUrl={imgUrl} linkUrl={linkUrl}/>))}
            </div>
        )
    }
};

export default Directory;