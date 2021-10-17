import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form } from './components/Form';
import { ListContacts } from './components/ListContacts';
import { Button } from './components/Button';
import { getContact } from './store/modules/contacts';
import styles from './app.module.scss';

function App() {
  const dispatch = useDispatch();
  const contactsFromRedux = useSelector(store => store.contacts);
  const modalFromRedux = useSelector(store => store.modal);

  useEffect(() => dispatch(getContact()));

  return (
    <div className={styles.container}>
      <Button classNamePosition="container__button" />

      {modalFromRedux.isModalOpen && (
        <Form />
      )}

      <h1>Контакты</h1>

      {(contactsFromRedux.contacts.length) ? <ListContacts contacts={contactsFromRedux.contacts} /> : <p>Пусто...</p>}
    </div>
  );
}

export default App;
