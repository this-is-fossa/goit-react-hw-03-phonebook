import { Component } from 'react';
import { Form, FormTitle, Input, FormBtn } from './ContactForm.styled';

export class ContactForm extends Component {

  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;

    e.preventDefault();

    if (this.props.contacts.find(contact => contact.name.includes(name))) {
      alert(`${name} is already is contact`);
    } else {
      this.props.onSubmit(name, number);
      this.reset();
    }
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormTitle htmlFor='name'>Name</FormTitle>
        <Input
          onChange={this.handleInputChange}
          value={name}
          type='text'
          name='name'
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <FormTitle htmlFor='number'>Number</FormTitle>
        <Input
          onChange={this.handleInputChange}
          value={number}
          type='tel'
          name='number'
          pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
          title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
          required
        />
        <FormBtn type={'submit'}>Add contact</FormBtn>
      </Form>
    );

  }

}

