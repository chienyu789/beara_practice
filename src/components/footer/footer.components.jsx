import React from 'react';

import { Link } from 'react-router-dom';

import ShippingIcon from '../../assets/white-penny.gif';
import FacebookIcon from '../../assets/facebook.svg';
import PinterestIcon from '../../assets/pinterest.svg';
import InstagramIcon from '../../assets/instagram.svg';
import WeiboIcon from '../../assets/weibo.svg';

import './footer.styles.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer-bar">
      <div className="marquee">
        <p>
          FREE UK SHIPPING
          <br />
          £10-£30 INTERNATIONAL
        </p>
        <img src={ShippingIcon} alt="shippinglogo" />
      </div>
    </div>
    <div className="footer-detail">
      <div className="aboutus">
        <span>ABOUT US</span>
        <Link className="link" to={process.env.PUBLIC_URL + '/our-story'}>Our Story</Link>
        <Link className="link" to={process.env.PUBLIC_URL + '/craftsmanship'}>Craftsmanship</Link>
        <Link className="link" to={process.env.PUBLIC_URL + '/customise'}>Personalising Your Bag</Link>
        <Link className="link" to={process.env.PUBLIC_URL + '/london-store'}>London Store</Link>
        <Link className="link" to={process.env.PUBLIC_URL + '/shanghai-store'}>Shanghai Store</Link>
        <Link className="link" to={process.env.PUBLIC_URL + '/blog'}>Blog</Link>
      </div>
      <div className="news">
        <form className="newsmail">
          <span>JOIN OUR NEWSLETTER</span>
          <input type="email" placeholder="Email" required />
          <input type="submit" value="SIGN UP" />
        </form>
        <div className="social-media">
          <Link to="/">
            <div className="logo">
              <img src={FacebookIcon} alt="fb" />
            </div>
          </Link>
          <Link to="/">
            <div className="logo">
              <img src={PinterestIcon} alt="pi" />
            </div>
          </Link>
          <Link to="/">
            <div className="logo">
              <img src={InstagramIcon} alt="ig" />
            </div>
          </Link>
          <Link to="/">
            <div className="logo">
              <img src={WeiboIcon} alt="wb" />
            </div>
          </Link>
        </div>
      </div>
      <div className="aboutus">
        <span>CUSTOMER SERVICE</span>
        <Link className="link" to="/contact">Contact Us</Link>
        <Link className="link" to="/faq">FAQ</Link>
        <Link className="link" to="/how-to-buy">How To Buy</Link>
        <Link className="link" to="/shipping-returns">Shipping & Returns</Link>
        <Link className="link" to="/affiliates">Affiliates</Link>
        <Link className="link" to="/terms-and-conditions">Terms & Conditions</Link>
        <Link className="link" to="/cookie-policy">Cookie Policy</Link>
      </div>
    </div>
  </div>
);

export default Footer;
