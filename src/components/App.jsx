import { Component } from 'react';
import Phonebook from './Phonebook';
import Contacts from './Contacts';
import Title from './Title';
import Filter from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getContacts = userData => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, userData],
    }));
  };

  handleFilter = ({ target }) => {
    console.log();
    this.setState({ filter: target.value });
  };

  filterChange = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(
      item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <>
        <Title title={'Phonebook'}>
          <Phonebook getContacts={this.getContacts} />
        </Title>
        {contacts.length !== 0 && (
          <Title title={'Contacts'}>
            <Filter handleFilter={this.handleFilter} />
            <Contacts
              usersArray={filter !== '' ? this.filterChange() : contacts}
            />
          </Title>
        )}
      </>
    );
  }
}

export default App;
