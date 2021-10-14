import {combineReducers} from 'redux';

import contacts from './modules/contacts';
import modal from './modules/modal';
import form from './modules/form';

export default combineReducers({
  contacts,
  modal,
  form,
});