import React from 'react';

import CollectionItem from '../collection-item/collection-item.components';

import './collections.styles.scss';

const CollectionPage = ({ items }) => (
    <div className='collections'>
    {
        items.map(({ id, ...otherItemProps}) =>(
        <CollectionItem key={id} {...otherItemProps}/>
        ))
    }
    </div>
);

export default CollectionPage;