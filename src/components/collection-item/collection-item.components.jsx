import React from 'react';
import { Link } from 'react-router-dom';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imgUrl, linkUrl }) => (
    <div className='collectionitem'>
        <Link to={linkUrl}>
        <img src={ imgUrl } alt={ name }/>
        </Link>
        <span>{ name }</span>
        <span>{ price }</span>
    </div>
);

export default CollectionItem;