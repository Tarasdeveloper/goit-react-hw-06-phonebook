import { ContactsItem, DeleteBtn, ListContacts } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/phonebookActions';

const ContactList = () => {
  const contacts = useSelector(state => state.phonebook.contacts);
  const filterTerm = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const contactsFilteredByName = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filterTerm.toLowerCase())
  );
  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <ListContacts>
        {contacts.length === 0 && <p>There are no contacts found!</p>}
        {contacts.length > 0 &&
          contactsFilteredByName.map(({ id, name, number }) => {
            return (
              <ContactsItem key={id}>
                <span>{name}</span>:&nbsp;{number}
                <DeleteBtn
                  type="button"
                  onClick={() => handleDeleteContact(id)}
                >
                  Delete
                </DeleteBtn>
              </ContactsItem>
            );
          })}
      </ListContacts>
    </div>
  );
};

export default ContactList;
