import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { selectCartCount } from '../../redux/cart/cart.selector';

import DropDownBag from '../dropdownbags/dropdownbags.components';
import DropDownStore from '../dropdownstore/dropdownstore.components';
import CartIcon from '../cart-icon/cart-icon.components';
import CartNav from '../cart-nav/cart-nav.components';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import './header.styles.scss';
import 'font-awesome/css/font-awesome.min.css';

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
        <div className="header-icon">
          <i className="fa fa-bars" />
        </div>
        <Link to={process.env.PUBLIC_URL + '/'}>
          <Logo className="logo" />
        </Link>
        <div className="nav">
          <div className="nav-list">
            <div className="languageselect">
              <button type="button" onClick={() => languageSelect('en')}>UK </button>
              <span>|</span>
              <button type="button" onClick={() => languageSelect('zh')}>中國</button>
            </div>
          </div>
          <div className="nav-list">
            <div className="dropdown" onMouseOver={ShowBagbar} onFocus={ShowBagbar} >
              <Link className="options" to={process.env.PUBLIC_URL + '/category/all-products'}>
                <FormattedMessage id="header.bags" />
              </Link>
              {
                    showbagState
                      ? <DropDownBag />
                      : null
                }
            </div>
          </div>
          <div className="nav-list">
            <Link className="options" to={process.env.PUBLIC_URL + '/customise'}>
              <FormattedMessage id="header.customise" />
            </Link>
          </div>
          <div className="nav-list">
            <div className="options" />
          </div>
          <div className="nav-list">
            <div className="dropdown" onMouseOver={ShowNavbar} onFocus={ShowNavbar} onMouseLeave={HideNavbar}>
              <Link className="title" to={process.env.PUBLIC_URL + '/london-store'}>
                <FormattedMessage id="header.stores" />
              </Link>
              {
                    showState
                      ? <DropDownStore />
                      : null
                }
            </div>
          </div>
          <div className="nav-list">
            <Link className="options" to={process.env.PUBLIC_URL + '/our-story'}>
              <FormattedMessage id="header.story" />
            </Link>
          </div>
        </div>
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
          ? <CartNav style={{ transform: 'translateX(0px)' }} />
          : <CartNav style={{ transform: 'translateX(360px)' }} />
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
