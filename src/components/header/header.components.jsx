import React, { useState } from "react";
import PropTypes from "prop-types";
// import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import { selectCartCount } from "../../redux/cart/cart.selector";

import DropDownBag from "../dropdownbags/dropdownbags.components";
import DropDownStore from "../dropdownstore/dropdownstore.components";
import CartIcon from "../cart-icon/cart-icon.components";
import CartNav from "../cart-nav/cart-nav.components";
import Navbar from "./Navbar.components";

import { ReactComponent as Logo } from "../../assets/logo.svg";

// import './header.styles.scss';
import {
  HeaderContainer,
  Nav,
  Languageselect,
  NavList,
  NavLogo,
  Options,
  LogoIcon,
  HeaderIcon,
  Dropdown,
  Cart,
  Line1,
} from "./header.styles";
// import 'font-awesome/css/font-awesome.min.css';

const Header = ({ hidden, count, languageSelect }) => {
  const [showbagState, setshowbagState] = useState(false);
  const [showState, setshowState] = useState(false);
  const [openState, setopenState] = useState(null);

  const ShowBagbar = () => setshowbagState(true);
  const HideBagbar = () => setshowbagState(false);

  const ShowNavbar = () => setshowState(true);
  const HideNavbar = () => setshowState(false);
  const HeaderToggle = () =>
    setopenState(() => {
      if (openState === null || openState === false) {
        return true;
      }
      return false;
    });

  return (
    <div>
      <HeaderContainer>
        <HeaderIcon onClick={HeaderToggle} toggle={openState}>
          <span />
          <span />
          <span />
        </HeaderIcon>
        <Languageselect>
          <button type="button" onClick={() => languageSelect("en")}>
            UK{" "}
          </button>
          <span>|</span>
          <button type="button" onClick={() => languageSelect("zh")}>
            中國
          </button>
        </Languageselect>
        <Nav>
          <NavList>
            <Dropdown onMouseOver={ShowBagbar} onMouseLeave={HideBagbar}>
              <Options to={process.env.PUBLIC_URL + "/category/all-products"}>
                <FormattedMessage id="header.bags" />
              </Options>
              {showbagState ? <DropDownBag /> : null}
            </Dropdown>
          </NavList>
          <NavList>
            <Options to={process.env.PUBLIC_URL + "/customise"}>
              <FormattedMessage id="header.customise" />
            </Options>
          </NavList>
          <NavLogo>
            <LogoIcon to={process.env.PUBLIC_URL + "/"}>
              <Logo />
            </LogoIcon>
          </NavLogo>
          <NavList>
            <Dropdown onMouseOver={ShowNavbar} onMouseLeave={HideNavbar}>
              <Options to={process.env.PUBLIC_URL + "/london-store"}>
                <FormattedMessage id="header.stores" />
              </Options>
              {showState ? <DropDownStore /> : null}
            </Dropdown>
          </NavList>
          <NavList>
            <Options to={process.env.PUBLIC_URL + "/our-story"}>
              <FormattedMessage id="header.story" />
            </Options>
          </NavList>
        </Nav>
        <Cart>{count >= 1 ? <CartIcon /> : null}</Cart>
      </HeaderContainer>
      <Navbar
        languageSelect={languageSelect}
        HeaderToggle={HeaderToggle}
        style={{ transform: `translateX(${openState ? 0 : -100}%)` }}
      />
      {hidden ? (
        <CartNav style={{ transform: "translateX(0%)" }} />
      ) : (
        <CartNav style={{ transform: "translateX(100%)" }} />
      )}
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
