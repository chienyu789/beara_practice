import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { selectCollections } from '../../redux/shop/shop.selector';

import CollectionPage from '../../components/collection/collections.components';
import Category from '../category/category.components';

import './shoppage.styles.scss'

const ShopPage = ({ match })=>{
    console.log(match);
    return( 
            <div>
                <div className='products'>
                    <Route exact path={`${match.path}/all-products`} component={CollectionPage}/>
                    <Route path={`${match.path}/:categoryId`} component={Category}/>
                </div>
            </div>
        )}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);