import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactList = () => {
  const dataContacts = useSelector(selectContacts);
  const dataNameFilter = useSelector(selectNameFilter);
  const dataGeneral = dataContacts.filter((contact) =>
    contact.name.toLowerCase().includes(dataNameFilter.toLowerCase())
  );

  return (
    <ul className={css.contact_items}>
      {dataGeneral.map((contact) => {
        return (
          <li key={contact.id} className={css.contact_item}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
