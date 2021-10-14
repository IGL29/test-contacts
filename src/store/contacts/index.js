const UPDATE_CONTACTS = 'UPDATE_CONTACTS';
const CREATE_CONTACT = 'CREATE_CONTACT';

export function updateContact(contact) {
  return {
    type: UPDATE_CONTACTS,
    payload: contact,
  };
}

export function createContact(newContact) {
  return {
    type: CREATE_CONTACT,
    payload: newContact,
  }
}

export const createContactActionCreator = (newContact) => (createContact(newContact));
export const updateContactActionCreator = (newContact) => (createContact(newContact));

const initialState = [
  { 
    id: 1,
    firstName: 'asdasd',
		lastName: 'asdas',
		phone: 'asd',
		email: 'asd',
  },
  { 
    id: 2,
    firstName: 'asd',
		lastName: 'asd',
		phone: 'asdasd',
		email: 'asdasd',
  }
];

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_CONTACT':
      action.payload.id = state.length + 1;

      return [
        ...state,
        action.payload
      ]
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map(contact => {
          if (contact === action.payload.id) {
            return action.payload;
          }
          return contact;
        }),
      }

    default:
      return state;
  }
}

export default contactsReducer;