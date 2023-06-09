import { Component } from 'react';
import { Form, Label, Input, Button } from './Phonebook.styled';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

class Phonebook extends Component {
  state = { name: '', number: '' };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    this.props.getContacts({
      name: name.value,
      number: number.value,
      id: nanoid(),
    });
    e.currentTarget.reset();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label htmlFor="name">
          Name
          <Input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={this.state.name}
            id="name"
            required
          />
        </Label>
        <Label htmlFor="number">
          Number
          <Input
            id="number"
            type="tel"
            name="number"
            pattern="(\+?[0-9]{1,2}?\s?[0-9]{2}\s?[0-9]{3}\s?[0-9]{4,5}$)"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            required
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}

Phonebook.propTypes = {
  getContacts: PropTypes.func.isRequired,
};

export default Phonebook;
