import React from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../../redux/shop/shop.selector';

import './productpage.styles.scss';

const ProductPage = ({ product, match }) =>{
    console.log(match.params.categoryId);
    console.log(product);
    return(
    <div>
        <h1>hello world</h1>
    </div>
)};

const mapStateToProps = ( state, ownProps ) =>({
    product: selectProduct(ownProps.match.params.categoryUrlParams, ownProps.match.params.productId)(state)
})

console.log(mapStateToProps);
export default connect(mapStateToProps)(ProductPage);
