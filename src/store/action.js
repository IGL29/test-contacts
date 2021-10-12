function getContacts(contacts) {
  return {
    type: 'GET_CONTACTS',
    contacts,
  };
}

function createContact(newContact) {
  return {
    type: 'CREATE_CONTACT',
    newContact,
  }
}