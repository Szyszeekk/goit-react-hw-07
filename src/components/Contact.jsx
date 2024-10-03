import css from "../css/Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={css.listItem}>
      <div>
        {contact.name} <br />
        {contact.number}
      </div>
      <button
        onClick={() => onDeleteContact(contact.id)}
        className={css.button}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
