import propTypes from "prop-types";

function ContactList(props) {
  return (
    <>
      <div
        style={{
          display: "inline-block",
          border: "solid black",
          borderRadius: "10px",
          padding: "1em",
          boxShadow: "2px black",
          margin: "1em",
        }}
      >
        <h2>{props.name}</h2>
        <ul>
          <li>{props.number}</li>
          <li>{props.email}</li>
        </ul>
      </div>
    </>
  );
}
ContactList.propTypes = {
  name: propTypes.string,
  number: propTypes.number,
  email: propTypes.string,
};

ContactList.defaultProps = {
  name: "Guess Contact",
  number: 1234567890,
  email: "guess@gmail.com",
};

export default ContactList;
