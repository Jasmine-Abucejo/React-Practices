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
    <div className="p-4 justify-center flex flex-row gap-4">
      {props.back ? (
        <button
          className="p-4  bg-white border-4 border-black rounded-2xl hover:border-green-500"
          onClick={back}
        >
          Previous
        </button>
      ) : null}

      <button
        className="p-4 bg-white border-4 border-black rounded-2xl hover:border-green-500"
        onClick={next}
      >
        Next
      </button>
    </div>
  );
}

export default Navigator;
