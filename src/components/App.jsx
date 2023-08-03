import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import Wrapper from './Wrapper/Wrapper';
import ContactList from './ContactList/ContactList';

import Filter from './Filter/Filter';
import {
  addContact,
  deleteContact,
  setFilterTerm,
} from 'redux/phonebookActions';

const App = () => {
  const contacts = useSelector(state => state.phonebook.contacts);

  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleFilterContactsByName = ({ target: { value } }) => {
    dispatch(setFilterTerm(value));
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter onChange={handleFilterContactsByName} />
      <ContactList onDelete={handleDeleteContact} />
    </Wrapper>
  );
};

export default App;
