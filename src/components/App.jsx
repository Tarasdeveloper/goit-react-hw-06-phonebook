// App.js
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import Wrapper from './Wrapper/Wrapper';
import ContactList from './ContactList/ContactList';
import {
  addContact,
  deleteContact,
  setFilterTerm,
} from 'redux/phonebookActions';
import Filter from './Filter/Filter';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.phonebook.contacts);

  const filterTerm = useSelector(state => state.phonebook.filter);

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

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  const checkNewContactPresence = contactName => {
    return contacts.some(contact => contact.name === contactName);
  };

  const handleFilterContactsByName = ({ target: { value } }) => {
    dispatch(setFilterTerm(value));
  };

  const contactsFilteredByName = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterTerm.toLowerCase())
  );

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm addContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter value={filterTerm} onChange={handleFilterContactsByName} />
      <ContactList
        contacts={contactsFilteredByName}
        onDelete={handleDeleteContact}
      />
    </Wrapper>
  );
};

export default App;
