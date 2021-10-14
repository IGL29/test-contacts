import { applyMiddleware } from 'react';
import { createStore } from 'redux';
import reducers from './reducers';

const initializeStore = (initialState = {}) => {
  return createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};

export default {initializeStore, reducers };