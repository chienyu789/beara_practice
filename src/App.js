import React from 'react';
import { Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shoppage/shoppage.components';

import Header from './components/header/header.components';
import Footer from './components/footer/footer.components';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
      <Footer/>
    </div>
  );
}

export default App;
