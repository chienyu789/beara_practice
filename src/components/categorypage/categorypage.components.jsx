import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCategory } from '../../redux/shop/shop.selector';

import './categorypage.styles.scss';

const CategoryPage = ({ category }) =>{

    if ( category === undefined ){
        return null
    }else{
    const { title, items } = category;
    return(
    <div>
        <span>{title}</span>
        {
            items.map((item) =>
            <div key={item.id}  className='collectionitem'>
            <Link to={item.linkUrl}>
            <img src={ item.imgUrl } alt={ item.name }/>
            </Link>
            <span>{ item.name }</span>
            <span>{ item.price }</span>
            </div>
                )
         }
    </div>
)}};

const mapStateToProps = ( state, ownProps ) =>({
    category: selectCategory(ownProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage);