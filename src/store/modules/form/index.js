const CHANGE_FORM = 'CHANGE_INPUT';
const CLEAR_MODAL = 'CLEAR_MODAL';
const FORM_ADD_VALUES = 'FORM_ADD_VALUES';

// ACTION CREATORS

export const changeInput = (payload) => {
  return {
    type: CHANGE_FORM,
    payload,
  };
}

export const clearForm = () => {
  return {
    type: CLEAR_MODAL,
  };
}

export const addValues = (payload) => {
  return {
    type: FORM_ADD_VALUES,
    payload,
  };
}

// STATE

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
};

// REDUCER

export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_MODAL:
      return {
        initialState,
      }
    case CHANGE_FORM:
      return {
        ...state,
        ...action.payload,
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
