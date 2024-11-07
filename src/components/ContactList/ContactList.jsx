import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            name={contact.name}
            number={contact.number}
            deleteContact={() => onDeleteContact(contact.id)}
          />
        );
      })}
    </ul>
  );
};

export default ContactList;
