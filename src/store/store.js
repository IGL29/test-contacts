import { reducer, initialState } from './reducer';
import { createStore } from 'redux';

const store = createStore(reducer, initialState);

export { store };
  