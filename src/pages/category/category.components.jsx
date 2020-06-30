import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { selectCategory } from '../../redux/shop/shop.selector';

import CategoryPage from '../../components/categorypage/categorypage.components';
import ProductPage from '../productpage/productpage.components';

import './category.styles.scss';

const Category = ({ match })=>{
    return( 
            <div className='products'>
                <Route exact path={`${match.path}`} component={CategoryPage}/>
                <Route path={`${match.path}/:productId`} component={ProductPage}/>
            </div>
        )}

const mapStateToProps = ( state, ownProps ) =>({
    category: selectCategory(ownProps.match.params.categoryId)(state),
})

export default connect(mapStateToProps)(Category);