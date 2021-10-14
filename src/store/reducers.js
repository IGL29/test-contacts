import {combineReducers} from 'redux';

import contacts from './contacts';
import modal from './modal';
import form from './form';

export default combineReducers({
  contacts,
  modal,
  form,
});