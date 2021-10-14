const GET_CONTACTS = 'GET_CONTACTS';
const CREATE_CONTACT = 'CREATE_CONTACT';

export function createContact(newContact) {
  return {
    type: CREATE_CONTACT,
    payload: newContact,
  }
}

export function getContact(newContact) {
  return {
    type: GET_CONTACTS,
  }
}

export const createContactActionCreator = (newContact) => (createContact(newContact));
export const getContactActionCreator = (newContact) => (createContact(newContact));

const initialState = {
  contacts: []
};

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      const isLocalStorageEmpty = localStorage.getItem('contacts').length;
      if(isLocalStorageEmpty) {
        return state;
      }
      return {
        contacts: localStorage.getItem('contacts')
      }
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