import {combineReducers} from 'redux';

import contactsReducer from './modules/contacts';
import modalReducer from './modules/modal';
import formReducer from './modules/form';

export default combineReducers({
  contacts: contactsReducer,
  modal: modalReducer,
  form: formReducer,
});
