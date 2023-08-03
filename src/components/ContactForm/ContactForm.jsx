import React, { useState } from 'react';
import { AddButton, Form, FormInput, FormLabel } from './ContactForm.styled';
import { addContact } from 'redux/phonebookActions';
import { useDispatch, useSelector } from 'react-redux';

const INITIAL_FORM_STATE = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  const handleInputsChange = ({ target: { name, value } }) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const checkNewContactPresence = contactName => {
    return contacts.some(contact => contact.name === contactName);
  };

  const handleAddContact = newContactData => {
    const newContactEntity = {
      ...newContactData,
    };

    if (!checkNewContactPresence(newContactEntity.name)) {
      dispatch(addContact(newContactEntity));
    } else {
      alert(`${newContactEntity.name} is already in contacts!`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name: formData.name,
      number: formData.number,
    };

    handleAddContact(newContact);
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
