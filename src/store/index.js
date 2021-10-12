import { contactReducer, initialState } from '../reducers';
import { createStore } from 'redux';

const store = createStore(contactReducer, initialState);

export { store };
  