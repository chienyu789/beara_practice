import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import { hideCart } from './redux/cart/cart.actions';
import { updateCollections } from './redux/shop/shop.action';
import { firestore,SnapshotToObject } from './firebase/firebase.utils';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shoppage/shoppage.components';
import CustomisePage from './pages/customisepage/customisepage.components';
import LondonStore from './pages/london-storepage/london-storepage.component';
import ShanghaiStore from './pages/shanghai-storepage/shanghai-storepage.component';
import StoryPage from './pages/storypage/storypage.components';
import CheckoutPage from './pages/checkout/checkout.components';
import SearchPage from './pages/search/searchpage.components';

import Header from './components/header/header.components';
import Footer from './components/footer/footer.components';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.components';

import './App.css';

function App(props) {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const collectionsMap = SnapshotToObject();
    updateCollections(collectionsMap);
    setloading(false);
    console.log(SnapshotToObject());
  });
  return (
    <div className="App">
      <ScrollToTop />
      {
        props.location.pathname !== process.env.PUBLIC_URL + '/checkout' && <Header languageSelect={props.languageSelect} />
      }
      {
          props.hidden === true && props.location.pathname !== process.env.PUBLIC_URL + '/checkout'
            ? <div className="overleft" onClick={props.hideCartNav} />
            : null
        }
      <div className="moveleft" style={props.hidden ? ({ transform: 'translateX(-360px)' }) : ({ transform: 'translateX(0px)' })}>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route path={process.env.PUBLIC_URL + '/customise'} component={CustomisePage} />
        <Route path={process.env.PUBLIC_URL + '/london-store'} component={LondonStore} />
        <Route path={process.env.PUBLIC_URL + '/shanghai-store'} component={ShanghaiStore} />
        <Route path={process.env.PUBLIC_URL + '/our-story'} component={StoryPage} />
        <Route path={process.env.PUBLIC_URL + '/category'} component={ShopPage} />
        <Route path={process.env.PUBLIC_URL + '/search'} component={SearchPage} />
      </div>
      <Route path={process.env.PUBLIC_URL + '/checkout'} component={CheckoutPage} />
      {
        props.location.pathname !== process.env.PUBLIC_URL + '/checkout' && <Footer />
      }
    </div>
  );
}
const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
});
const mapDispatchToProps = (dispatch) => ({
  hideCartNav: () => dispatch(hideCart()),
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
