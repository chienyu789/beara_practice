import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCategory } from '../../redux/shop/shop.selector';

import './categorypage.styles.scss';

const CategoryPage = ({ category }) =>{
    if ( category === undefined ){
        return null
    }else{
    const { title, videoUrl,  items } = category;
    return(
    <div>
        {
            videoUrl?
            <div className='video-container'>
            <iframe src={videoUrl} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen="" title={title} data-ready="true"></iframe>
            </div>:
            null
        }
        <span className='category-title'>{title.slice(0,1)+title.slice(1).toLowerCase()}</span>
        {
            items.map((item) =>
            <div key={item.id}  className='collectionitem'>
            <Link to={item.linkUrl}>
            <img src={ item.imgUrl } alt={ item.name }/>
            </Link>
            <span>{ item.name }</span>
            <span>£{ item.price }</span>
            </div>
                )
         }
    </div>
)}};

const mapStateToProps = ( state, ownProps ) =>({
    category: selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);