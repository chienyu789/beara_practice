import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shoppage/shoppage.components';
import CustomisePage from './pages/customisepage/customisepage.components';
import LondonStore from './pages/london-storepage/london-storepage.component';
import ShanghaiStore from './pages/shanghai-storepage/shanghai-storepage.component';
import StoryPage from './pages/storypage/storypage.components';
import CheckoutPage from './pages/checkout/checkout.components';

import Header from './components/header/header.components';
import Footer from './components/footer/footer.components';

import './App.css';

function App(props) {
  return (
    <div className="App">
      {
        props.location.pathname !== process.env.PUBLIC_URL + '/checkout' && <Header languageSelect={props.languageSelect} />
      }
      <div className="moveleft" style={props.hidden ? ({ marginRight: '360px' }) : ({ marginRight: '0px' })}>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route path={process.env.PUBLIC_URL + '/customise'} component={CustomisePage} />
        <Route path={process.env.PUBLIC_URL + '/london-store'} component={LondonStore} />
        <Route path={process.env.PUBLIC_URL + '/shanghai-store'} component={ShanghaiStore} />
        <Route path={process.env.PUBLIC_URL + '/our-story'} component={StoryPage} />
        <Route path={process.env.PUBLIC_URL + '/category'} component={ShopPage} />
        <Route path={process.env.PUBLIC_URL + '/checkout'} component={CheckoutPage} />
      </div>
      {
        props.location.pathname !== process.env.PUBLIC_URL + '/checkout' && <Footer />
      }
    </div>
  );
}
const mapStateToProps = (state) => ({
  hidden: state.cart.hidden,
});

export default withRouter(connect(mapStateToProps)(App));
