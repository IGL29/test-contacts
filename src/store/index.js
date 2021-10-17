import { applyMiddleware } from 'react';
import { createStore } from 'redux';
import rootReducer from './reducers';

const initializeStore = (initialState = {}) => {
  const REDUX_DEVTOOL = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

  return createStore(rootReducer, initialState, REDUX_DEVTOOL);
};

export { initializeStore };
