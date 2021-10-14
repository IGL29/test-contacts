import { Form } from './components/Form';
import { ListContacts } from './components/ListContacts';
import { Button } from './components/Button';
import { useSelector } from 'react-redux';
import styles from './app.scss';

function App() {
  const contactsFromRedux = useSelector(store => store.contacts)
  const modalFromRedux = useSelector(store => store.modal)

  return (
    <div className="container">
      <Button classNamePosition="container__button" />
      
      {modalFromRedux.isModalOpen && (
        <Form />
      )}

      <h1>Контакты</h1>

      {(contactsFromRedux.length) ? <ListContacts contacts={contactsFromRedux} /> : <p>Пусто...</p>}
    </div>
  );
}

export default App;