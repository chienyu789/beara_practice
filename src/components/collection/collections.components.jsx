import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { selectCollections } from '../../redux/shop/shop.selector';


import './collections.styles.scss';

const CollectionPage = ({ collections }) => (
    <div>
        {
            collections.map(({items}) => 
            items.map((item) =>
            <div key={item.id}  className='collectionitem'>
            <Link to={item.linkUrl}>
            <img src={ item.imgUrl } alt={ item.name }/>
            </Link>
            <span>{ item.name }</span>
            <span>{ item.price }</span>
            </div>
                ))
         }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionPage);