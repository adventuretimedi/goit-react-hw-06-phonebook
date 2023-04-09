import s from './ContactList.module.css';
import { getContacts, getFilter } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const filterLower = filter.toLowerCase();
    return filter === ''
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterLower)
        );
  };

  const visibleContacts = getVisibleContacts();

  const handleDelete = contact => dispatch(deleteContact(contact.id));

  return (
    <div>
      <ul>
        {visibleContacts.map(contact => (
          <li className={s.contactsListItem} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              type="button"
              className={s.contactsBtn}
              onClick={() => {
                handleDelete(contact);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
