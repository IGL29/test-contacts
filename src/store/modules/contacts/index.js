const GET_CONTACTS = 'GET_CONTACTS';
const CREATE_CONTACT = 'CREATE_CONTACT';

// ACTION CREATORS

export const createContact = (newContact) => {
  return {
    type: CREATE_CONTACT,
    payload: newContact,
  }
}

export const getContact = () => {
  return {
    type: GET_CONTACTS,
  }
}

// STATE

const initialState = {
  contacts: []
};

// REDUCER

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      const isLocalStorageNotEmpty = localStorage.getItem('contacts')?.length;
      if(isLocalStorageNotEmpty) {
        return { contacts: localStorage.getItem('contacts') }
      }
      return state;

    case CREATE_CONTACT:
      if (!action.payload.id) {
        action.payload.id = state.contacts.length + 1;
        return {
          contacts: [...state.contacts, action.payload],
        }
      }
      return {
        ...state,
        contacts: state.contacts.map((contact) => contact.id === action.payload.id ? action.payload : contact)
      }

    default:
      return state;
  }
}

export default contactsReducer;
