import ContactList from "./ContactList.jsx";
import List from "./List.jsx";
import { useNavigate } from "react-router-dom";

function Contacts() {
  const names = ["Contact 1", "Contact 2", "Contact 3"];
  const navigate = useNavigate();
  const back = () => {
    navigate("/contacts");
  };
  const next = () => {
    navigate("/colorpicker");
  };
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
      <List list={names} />
      <List />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "1em",
          gap: "90em",
        }}
      >
        <button style={{ padding: "1em" }} onClick={back}>
          Previous
        </button>
        <button style={{ padding: "1em" }} onClick={next}>
          Next
        </button>
      </div>
    </>
  );
}
export default Contacts;
