import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCartCount } from '../../redux/cart/cart.selector';

import DropDownBag from '../dropdownbags/dropdownbags.components';
import DropDownStore from '../dropdownstore/dropdownstore.components';
import CartIcon from '../cart-icon/cart-icon.components';
import CartNav from '../cart-nav/cart-nav.components';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';

const Header = ({ hidden, count, languageSelect }) => {
  const [showbagState, setshowbagState] = useState(false);
  const [showState, setshowState] = useState(false);

  const ShowBagbar = () => (
    setshowbagState(true)
  );
  const HideBagbar = () => (
    setshowbagState(false)
  );

  const ShowNavbar = () => (
    setshowState(true)
  );
  const HideNavbar = () => (
    setshowState(false)
  );

  return (
    <div>
      <div className="header">
        <div className="languageselect">
          <button type="button" onClick={() => languageSelect('en')}>UK </button>
          <span>|</span>
          <button type="button" onClick={() => languageSelect('zh')}>中國</button>
        </div>
        <div className="dropdown" onMouseOver={ShowBagbar} onFocus={ShowBagbar} onMouseLeave={HideBagbar}>
          <Link className="options" to={process.env.PUBLIC_URL + "/category/all-products"}>
            BAGS
          </Link>
          {
                showbagState
                  ? <DropDownBag />
                  : null
            }
        </div>
        <Link className="options" to={process.env.PUBLIC_URL + "/customise"}>
          CUSTOMISE
        </Link>
        <Link className="options" to={process.env.PUBLIC_URL + "/"}>
          <Logo className="logo" />
        </Link>
        <div className="dropdown" onMouseOver={ShowNavbar} onFocus={ShowNavbar} onMouseLeave={HideNavbar}>
          <Link className="title" to={process.env.PUBLIC_URL + "/london-store"}>
            OUR STORE
          </Link>
          {
                showState
                  ? <DropDownStore />
                  : null
            }
        </div>
        <Link className="options" to={process.env.PUBLIC_URL + "/our-story"}>
          OUR STORY
        </Link>
        <div className="carticon">
          {
                count >= 1
                  ? <CartIcon />
                  : null
            }
        </div>
      </div>
      {
        hidden
          ? <CartNav style={{ width: '360px' }} />
          : <CartNav style={{ width: '0px' }} />
    }
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
  count: selectCartCount(state),
});

Header.propTypes = {
  hidden: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  languageSelect: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(Header);
