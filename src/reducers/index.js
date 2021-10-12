import { GET_CONTACTS, CREATE_CONTACT } from '../actions';

const initialState = {
  contacts: [
    {
      id: 1,
      firstName: 'asdad',
      lastName: 'asdad',
      phone: 1231321211,
      email: 'adsasd@dasd.as'
    },
    {
      id: 2,
      firstName: 'asdad',
      lastName: 'asdad',
      phone: 1231321211,
      email: 'adsasd@dasd.as'
    },
    {
      id: 3,
      firstName: 'asdad',
      lastName: 'asdad',
      phone: 1231321211,
      email: 'adsasd@dasd.as'
    },
    {
      id: 4,
      firstName: 'asdad',
      lastName: 'asdad',
      phone: 1231321211,
      email: 'adsasd@dasd.as'
    },
  ],
  isModalOpen: false
};

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_CONTACT:
      return Object.assign({}, state, {
        newContact: action.createContact
      });

    default:
      return state;
  }
}

export { initialState, contactReducer };