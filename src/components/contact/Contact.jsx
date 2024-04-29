import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css.contact_card}>
        <div className={css.contact_name_number}>
          <span className={css.contact_svg}>
            <FaUser />
          </span>
          <p>{name}</p>
        </div>
        <div className={css.contact_name_number}>
          <span className={css.contact_svg}>
            <FaPhoneAlt />
          </span>
          <p>{number}</p>
        </div>
      </div>
      <div className={css.contact_delete}>
        <button
          className={css.contact_delete_button}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>
    </>
  );
};

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};

export default Contact;
