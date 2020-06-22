import React from 'react';

import CollectionPage from '../../components/collection/collections.components';
import SHOP_DATA from '../../redux/shop/shop.data';

import './shoppage.styles.scss'

class ShopPage extends React.Component{
    constructor(){
        super();

        this.state={
            collections: SHOP_DATA
        };
    }

    render(){

        return(
            <div>
                <h1>ALL PRODUCTS</h1>
                <div className='products'>
                    {
                        this.state.collections.map(({ id, ...otherCollectionsProps }) =>(
                            <CollectionPage key={id} {...otherCollectionsProps}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}


export default ShopPage;