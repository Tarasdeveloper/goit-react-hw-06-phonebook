import React, { useState } from 'react';
import { AddButton, Form, FormInput, FormLabel } from './ContactForm.styled';

const INITIAL_FORM_STATE = {
  name: '',
  number: '',
};

export default function ContactForm({ addContact }) {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const handleInputsChange = ({ target: { name, value } }) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name: formData.name,
      number: formData.number,
    };

    addContact(newContact);
    setFormData({ number: '', name: '' });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={formData.name}
          onChange={handleInputsChange}
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={formData.number}
          onChange={handleInputsChange}
        />
      </FormLabel>
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
}
