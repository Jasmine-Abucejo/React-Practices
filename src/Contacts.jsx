import ContactList from "./ContactList.jsx";

function Contacts() {
  return (
    <>
      <h1>Contacts</h1>
      <ContactList
        name="Contact 1"
        number={900000000}
        email="contact1@gmail.com"
      />
      <ContactList
        name="Contact 2"
        number={900000001}
        email="contact2@gmail.com"
      />
      <ContactList />
    </>
  );
}
export default Contacts;
