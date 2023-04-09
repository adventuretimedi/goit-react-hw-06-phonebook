import { useDispatch, useSelector } from 'react-redux';
import s from './ContactForm.module.css';
import { addContact } from 'redux/contactsSlice';
import { Notify } from 'notiflix';
import { getContacts } from 'redux/selectors';

const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const alreadyExists = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    form.reset();

    if (alreadyExists) {
      Notify.failure(`${name} is already in contacts`);
    } else {
      dispatch(addContact({ name, number }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={s.contactForm}>
      <label htmlFor="">
        <p className={s.inputName}>Name</p>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label htmlFor="">
        <p className={s.inputName}>Number</p>
        <input
          className={s.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
