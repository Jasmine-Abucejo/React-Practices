import { useNavigate } from "react-router-dom";

function Navigator(props) {
  const navigate = useNavigate();
  const back = () => {
    navigate(props.back);
  };
  const next = () => {
    navigate(props.next);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "1em",
        justifyContent: "center",
        gap: "1em",
      }}
    >
      {props.back ? (
        <button style={{ padding: "1em" }} onClick={back}>
          Previous
        </button>
      ) : null}

      <button style={{ padding: "1em" }} onClick={next}>
        Next
      </button>
    </div>
  );
}

export default Navigator;
