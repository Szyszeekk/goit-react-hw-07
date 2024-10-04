import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addContact } from "../redux/contacts";
import css from "../css/ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const Validation = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    phone: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      phone: values.phone,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      validationSchema={Validation}
      onSubmit={handleSubmit}>
      <Form className={css.form}>
        <div className={css.input}>
          <label htmlFor="name-id">Name</label>
          <Field type="text" name="name" id="name-id" />
          <ErrorMessage name="name" as="span" />
        </div>
        <div className={css.input}>
          <label htmlFor="phone-id">Phone</label>{" "}
          <Field type="text" name="phone" id="phone-id" />{" "}
          <ErrorMessage name="phone" as="span" />{" "}
        </div>
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
