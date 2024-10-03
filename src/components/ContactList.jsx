import { useDispatch, useSelector } from "react-redux";
import storeConfig from "../redux/store";
import Contact from "./Contact";
import css from "../css/ContactList.module.css";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          onDeleteContact={() =>
            dispatch(storeConfig.actions.deleteContact(contact.id))
          }
        />
      ))}
    </ul>
  );
};

export default ContactList;
