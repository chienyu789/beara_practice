import React from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../../redux/shop/shop.selector';
import { addProduct } from '../../redux/cart/cart.actions';

import './productpage.styles.scss';

const ProductPage = ({ product, match, addProduct }) =>{
    console.log(product);
    const { id, name, imgUrl, price } = product;
    return(
        <div>
    <div key={ id }>
        <img src={imgUrl} alt={id}/>
        <span>{ name }</span>
        <span>{ price }</span>
    </div>
    <button>GIFT WRAPPING</button>
    <button>EMBOSSING</button>
    <button onClick={()=>addProduct(product)}>ADD TO CART</button>
    </div>
)};

const mapStateToProps = ( state, ownProps ) =>({
    product: selectProduct(ownProps.match.params.categoryId, ownProps.match.params.productId)(state)
})

const mapDispatchToProps = dispatch =>({
    addProduct: product => dispatch(addProduct(product))
})

console.log(mapDispatchToProps);
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
