import PropTypes from 'prop-types';
import { ContactsItem, DeleteBtn, ListContacts } from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
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
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  filter: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
