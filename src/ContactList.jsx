import propTypes from "prop-types";

function ContactList(props) {
  return props.name ? (
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
  ) : null;
}
ContactList.propTypes = {
  name: propTypes.string,
  number: propTypes.number,
  email: propTypes.string,
};

export default ContactList;
