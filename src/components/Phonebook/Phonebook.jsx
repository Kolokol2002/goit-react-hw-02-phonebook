import { Component } from 'react';

import { Form, Label, Input, Button } from './Phonebook.styled';

class Phonebook extends Component {
  state = { name: '', number: '' };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    this.props.getContacts({ name: name.value, number: number.value });
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
            pattern="^(?:\+38)?(?:\(044\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$"
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

export default Phonebook;
