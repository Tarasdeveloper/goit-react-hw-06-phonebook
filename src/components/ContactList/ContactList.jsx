import PropTypes from 'prop-types';
import { ContactsItem, DeleteBtn, ListContacts } from './ContactList.styled';
import { useSelector } from 'react-redux';

const ContactList = ({ onDelete }) => {
  const contacts = useSelector(state => state.phonebook.contacts);
  return (
    <div>
      <ListContacts>
        {contacts.length === 0 && <p>There are no contacts found!</p>}
        {contacts.length > 0 &&
          contacts.map(({ id, name, number }) => {
            return (
              <ContactsItem key={id}>
                <span>{name}</span>:&nbsp;{number}
                <DeleteBtn type="button" onClick={() => onDelete(id)}>
                  Delete
                </DeleteBtn>
              </ContactsItem>
            );
          })}
      </ListContacts>
    </div>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
