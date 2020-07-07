import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { IntlProvider } from 'react-intl';
import en from './i18n/en';
import zh from './i18n/zh';
import store from './redux/store';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const Root = () => {
  const [locale, setLocale] = useState('en'); //navigator.language user's area
  let messages;

  if (locale.includes('zh')) {
    messages = zh;
  } else {
    messages = en;
  }

  return(
  <IntlProvider locale={locale} key={locale} defaultLocale="en" messages={messages}>
    <Provider store={store}>
      <BrowserRouter>
        <App languageSelect={(language)=>setLocale(language)}/>
      </BrowserRouter>
    </Provider>
  </IntlProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
