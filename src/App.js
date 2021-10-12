import { Form } from './components/Form';
import { ListContacts } from './components/ListContacts';
import { Button } from './components/Button';
import styles from './app.scss';
import React from 'react';
import { store } from './store';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.contacts = store.getState().contacts
  }

  openModal = (booleanState) => {
    this.setState({
      isOpen: booleanState || !this.state.isOpen,
    });
  }

  render() {
    return (
      <div className="container">
        <Button
          classNamePosition="container__button"
          handlerClick={ this.openModal }
        />

        <Form
          isOpen={ this.state.isOpen }
          openModal={ this.openModal }
        />

        <h1>Контакты</h1>

        {(this.contacts.length) ? <ListContacts contacts={this.contacts} /> : <p>Пусто...</p>}
      </div>
    );
  }
}

export default App;