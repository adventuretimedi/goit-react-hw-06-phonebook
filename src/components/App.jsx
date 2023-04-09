import ContactForm from './Phonebook/ContactForm';
import ContactsList from './Contacts/ContactsList';
import Filter from './Filter/Filter';
import s from './App.module.css';

const App = () => {
  return (
    <div className={s.contentWrapper}>
      <section>
        <h2 className={s.title}>Phonebook</h2>
        <ContactForm />
      </section>
      <section>
        <h2 className={s.title}>Contacts</h2>
        <Filter />
        <ContactsList />
      </section>
    </div>
  );
};

export default App;
