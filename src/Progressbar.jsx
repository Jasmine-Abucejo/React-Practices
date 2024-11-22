import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Progressbar() {
  const navigate = useNavigate();
  const back = () => {
    navigate("/todo");
  };
  const next = () => {
    navigate("/submitform");
  };
  const [percent, setPercent] = useState(0);
  const [computed, setComputed] = useState(0);
  const handleChange = (e) => {
    if (e.target.value > 100) {
      e.target.value = 0;
      setComputed(0);
      setPercent(0);
    } else {
      // console.log(e.target.value);
      setPercent(e.target.value);
      let val = e.target.value * 0.3;
      console.log(val);
      setComputed(val);
    }
  };
  return (
    <div>
      <h1>Progress Bar</h1>
      <div
        style={{
          height: "2em",
          width: "30vw",
          border: "solid black",
          borderRadius: "1em",
        }}
      >
        <div
          style={{
            height: "2em",
            width: `${computed}vw`,
            borderRadius: "1em",
            backgroundColor: "pink",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          {percent}%
        </div>
      </div>
      <div style={{ marginTop: "1em" }}>
        <progress value={percent * 0.01} /> {percent}%
        <form action="">
          <input
            type="number"
            name="percent"
            id="percent"
            onChange={handleChange}
          />
          Input percentage
        </form>
      </div>
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
    </div>
  );
}
export default Progressbar;
