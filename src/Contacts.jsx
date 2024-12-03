import ContactList from "./ContactList.jsx";
import List from "./List.jsx";
import Navigator from "./Navigator.jsx";

function Contacts() {
  const names = ["Contact 1", "Contact 2", "Contact 3"];

  return (
    <div style={{ textAlign: "center" }}>
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
      <List list={names} />
      <List />
      <Navigator back="/progressbar" next="/colorpicker" />
    </div>
  );
}
export default Contacts;
