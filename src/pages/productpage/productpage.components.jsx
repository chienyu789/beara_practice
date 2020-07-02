import React,{ useState } from 'react';
import { connect } from 'react-redux';
import { selectProduct } from '../../redux/shop/shop.selector';
import { addProduct } from '../../redux/cart/cart.actions';

import CustomiseButton from '../../components/customise-button/customise-button.components';

import './productpage.styles.scss';

const ProductPage = ({ product, match, addProduct }) =>{
    const { id, name, imgUrl, price } = product;
    const gift ={ id: 'gift', name: 'gift', imgUrl:require('../../assets/wrapping-paper.jpg'), price:6 };
    const [ seenState, setseenState ] = useState(false);
    const toggleCustomise = () =>{
        setseenState(!seenState)
    }
    return(
        <div className='product-page'>
            <div className='product-detail' key={ id }>
                <img src={imgUrl} alt={id}/>
                <span className='product-name'>{ name }</span>
                <span className='product-price'>£{ price }</span>
            </div>
            <div className='selectbutton'>
            <button className='customisebutton'onClick={()=>addProduct(gift)}>GIFT WRAPPING(£6)</button>
            <button className='customisebutton'onClick={toggleCustomise}>EMBOSSING(£15)</button>
            <button className='addbutton' onClick={()=>addProduct(product)}>ADD TO CART</button>
            </div>
            { seenState? <CustomiseButton closeClick={toggleCustomise}/>: null}
        </div>
)};

const mapStateToProps = ( state, ownProps ) =>({
    product: selectProduct(ownProps.match.params.categoryId, ownProps.match.params.productId)(state)
})

const mapDispatchToProps = dispatch =>({
    addProduct: product => dispatch(addProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
