import { useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";

const App = () => {
  const getInitialContacts = () => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  };

  const [contacts, setContacts] = useState(getInitialContacts);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox search={search} onSearchChange={handleSearchChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
