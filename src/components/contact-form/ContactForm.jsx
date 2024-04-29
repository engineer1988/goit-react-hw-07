import css from "./ContactForm.module.css";
import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={css.contact_form}>
        <div className={css.contact_form_name_number}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            type="text"
            name="name"
            id={nameFieldId}
            className={css.contact_form_field}
          />
          <ErrorMessage
            name="name"
            component="div"
            className={css.contact_form_error_message}
          />
        </div>
        <div className={css.contact_form_name_number}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            type="text"
            name="number"
            id={numberFieldId}
            className={css.contact_form_field}
          />
          <ErrorMessage
            name="number"
            component="div"
            className={css.contact_form_error_message}
          />
        </div>
        <div className={css.contact_form_div_button}>
          <button className={css.contact_form_button} type="submit">
            Add contact
          </button>
        </div>
      </Form>
    </Formik>
  );
};
export default ContactForm;
