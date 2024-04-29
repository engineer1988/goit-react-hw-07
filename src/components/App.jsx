import "./App.css";
import ContactForm from "./contact-form/ContactForm";
import SearchBox from "./search-box/SearchBox";
import ContactList from "./contact-list/ContactList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import {
  selectError,
  selectLoading,
  selectContacts,
} from "../redux/contactsSlice";
import Loader from "./loader/Loader";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {contacts.length <= 15 && isLoading && !error && <Loader />}
      {contacts.length <= 15 && error && <p>{error}</p>}
      <ContactList />
      {contacts.length > 15 && isLoading && !error && <Loader />}
    </div>
  );
}

export default App;
