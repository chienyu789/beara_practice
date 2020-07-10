import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addProduct, showCart } from '../../redux/cart/cart.actions';

import './customise-button.styles.scss';

const CustomiseButton = ({ closeClick, product, addProductToCart, showCartNav }) => {
  const [customiseState, setcustomiseState] = useState('');
  const [fontState, setfontState] = useState('');
  const [positionState, setpositionState] = useState('');
  const [colourState, setcolourState] = useState('');
  const customise = {
    ...product,
    emboseprice: 15,
    text: customiseState,
    font: fontState,
    colour: colourState,
    position: positionState,
  };

  const customiseChange = (e) => {
    setcustomiseState(e.currentTarget.value);
  };
  const buttonClick = (e) => {
    setcustomiseState(customiseState + e.currentTarget.value);
  };

  const fontChange = (e) => {
    setfontState(e.currentTarget.value);
  };

  const positionChange = (e) => {
    setpositionState(e.currentTarget.value);
  };

  const colourChange = (e) => {
    setcolourState(e.currentTarget.value);
  };

  const style = {
    fontFamily: `${fontState}`,
    color: `${colourState}`,
  };

  return (
    <div className="customise">
      <div className="close-customise">
        <button type="button" onClick={closeClick}>&#10005;</button>
      </div>
      <div className="sample" style={style}><span>{ customiseState }</span></div>
      <form>
        <input type="text" name="embosing" placeholder="Type your embosing here" onChange={customiseChange} value={customiseState} />
        <select name="fonts" id="fonts" onChange={fontChange}>
          <option value="" disabled selected hidden>Font</option>
          <option value="TimesNewRoman">Times New Roman</option>
          <option value="Parisienne">Handwritten Font</option>
        </select>
        <select name="position" id="position" onChange={positionChange}>
          <option value="" disabled selected hidden>Position</option>
          <option value="top-font">Top Font</option>
        </select>
        <select name="colour" id="colour" onChange={colourChange}>
          <option value="" disabled selected hidden>Colour</option>
          <option value="natural">Natural</option>
          <option value="gold">Gold</option>
        </select>
        <div>
          <input type="button" onClick={buttonClick} value="&#10084;" id="10" />
          <input type="button" onClick={buttonClick} value="&#10025;" id="25" />
          <input type="button" onClick={buttonClick} value="&#10047;" id="47" />
          <input type="button" onClick={buttonClick} value="&#9728;" id="28" />
        </div>
        <button type="button" className="addcustomise" onClick={() => { addProductToCart(customise); closeClick(); showCartNav(); }}>ADD TO CART</button>
      </form>
    </div>
  );
};

CustomiseButton.propTypes = {
  closeClick: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addProductToCart: PropTypes.func.isRequired,
  showCartNav: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (product) => dispatch(addProduct(product)),
  showCartNav: () => dispatch(showCart()),
});

export default connect(null, mapDispatchToProps)(CustomiseButton);
