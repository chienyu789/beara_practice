import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
// import { reduxFirestore, getFirestore } from 'redux-firestore';
// import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
// import fbConfig from '../firebase/firebase.utils';
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
