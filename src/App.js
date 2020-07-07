import React from 'react';
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
        props.location.pathname!=='/checkout' && <Header languageSelect={props.languageSelect} />
      }
      <Route exact path='/' component={HomePage}/>
      <Route path='/customise' component={CustomisePage}/>
      <Route path='/london-store' component={LondonStore}/>
      <Route path='/shanghai-store' component={ShanghaiStore}/>
      <Route path='/our-story' component={StoryPage}/>
      <Route path='/category' component={ShopPage}/>
      <Route path='/checkout' component={CheckoutPage}/>
      {
        props.location.pathname!=='/checkout' && <Footer/>
      }
    </div>
  );
}

export default withRouter(App);
