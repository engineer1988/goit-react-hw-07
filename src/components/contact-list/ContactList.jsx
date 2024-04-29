import Contact from "../contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
// import { selectContacts } from "../../redux/contactsSlice";
// import { selectNameFilter } from "../../redux/filtersSlice";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const dataContacts = useSelector(selectFilteredContacts);
  // const dataNameFilter = useSelector(selectNameFilter);
  // const dataGeneral = dataContacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(dataNameFilter.toLowerCase())
  // );

  return (
    <ul className={css.contact_items}>
      {dataContacts.map((contact) => {
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
