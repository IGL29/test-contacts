const GET_CONTACTS = 'GET_CONTACTS';
const CREATE_CONTACT = 'CREATE_CONTACT';

function getContacts(contacts) {
  return {
    type: GET_CONTACTS,
    contacts,
  };
}

function createContact(newContact) {
  return {
    type: CREATE_CONTACT,
    newContact,
  }
}

export { GET_CONTACTS, CREATE_CONTACT };