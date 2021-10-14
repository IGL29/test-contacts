import { Form } from './components/Form';
import { ListContacts } from './components/ListContacts';
import { Button } from './components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getContactActionCreator } from './store/modules/contacts';
import styles from './app.module.scss';

function App() {
  const dispatch = useDispatch();
  const contactsFromRedux = useSelector(store => store.contacts);
  const componentDidMount = () => dispatch(getContactActionCreator());
  const modalFromRedux = useSelector(store => store.modal)
  console.log(contactsFromRedux)

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