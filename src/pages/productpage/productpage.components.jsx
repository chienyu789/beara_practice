import React from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../../redux/shop/shop.selector';
import { addProduct } from '../../redux/cart/cart.actions';

import './productpage.styles.scss';

const ProductPage = ({ product, match, addProduct }) =>{
    console.log(product);
    const { id, name, imgUrl, price } = product;
    return(
        <div className='product-page'>
            <div className='product-detail' key={ id }>
                <img src={imgUrl} alt={id}/>
                <span className='product-name'>{ name }</span>
                <span className='product-price'>{ price }</span>
            </div>
            <div className='selectbutton'>
            <button className='customisebutton'>GIFT WRAPPING</button>
            <button className='customisebutton'>EMBOSSING</button>
            <button className='addbutton' onClick={()=>addProduct(product)}>ADD TO CART</button>
            </div>
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
