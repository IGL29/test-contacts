import { createStore } from 'redux';
import reducers from './reducers';

const initializeStore = (initialState = {}) => {
  return createStore(reducers, initialState);
};

export default {initializeStore, reducers};