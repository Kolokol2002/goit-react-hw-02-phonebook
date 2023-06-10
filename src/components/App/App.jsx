import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Phonebook from '../Phonebook';
import Contacts from '../Contacts';
import Title from '../Title';
import Filter from '../Filter';
import { MainContainer } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  getContacts = userData => {
    this.setState(({ contacts }) => {
      const isEmpty = contacts.filter(
        ({ name }) => name === userData.name
      ).length;

      if (isEmpty === 0) {
        return { contacts: [...contacts, userData] };
      } else {
        toast.warn(`${userData.name}, already exist in phonebook!!!`, {
          icon: '❗',
        });
      }
    });
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

  onDelete = ({ target }) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(item => item.name !== target.dataset.userName),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <MainContainer>
        <Title title={'Phonebook'}>
          <Phonebook getContacts={this.getContacts} />
        </Title>

        {contacts.length !== 0 && (
          <Title title={'Contacts'}>
            <Filter handleFilter={this.handleFilter} />
            <Contacts
              usersArray={filter !== '' ? this.filterChange() : contacts}
              onDelete={this.onDelete}
            />
          </Title>
        )}
      </MainContainer>
    );
  }
}

export default App;
