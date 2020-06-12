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
                    title: 'bracelets-blog',
                    imgUrl: require('../../assets/bracelets.jpg'),
                    linkUrl:'blog/bracelet'
                },
                {
                    id: 2,
                    title: 'phoenix-blog',
                    imgUrl: require('../../assets/phoenix.jpg'),
                    linkUrl:'blog/phoenix'
                },
                {
                    id: 3,
                    title: 'love&hope-blog',
                    imgUrl: require('../../assets/loveandhope.jpg'),
                    linkUrl:'blog/loveandhope'
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