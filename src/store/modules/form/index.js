const CHANGE_FORM = 'CHANGE_INPUT';
const CLEAR_MODAL = 'CLEAR_MODAL';
const FORM_ADD_VALUES = 'FORM_ADD_VALUES';

function changeInput() {
  return {
    type: CHANGE_FORM,
  };
}

function clearForm() {
  return {
    type: CLEAR_MODAL,
  };
}

function addValues(payload) {
  return {
    type: FORM_ADD_VALUES,
    payload,
  };
}

export const changeInputActionCreator = () => changeInput();
export const clearFormActionCreator = () => clearForm();
export const addInitialValue = (values) => addValues(values);

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
};

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_MODAL:
      return {
        initialState,
      }
    case CHANGE_FORM:
      return {
        ...state,
      }
    case FORM_ADD_VALUES: {
      return {
        ...state,
        ...action.payload,
      }
    }
    default:
      return state;
  }
};