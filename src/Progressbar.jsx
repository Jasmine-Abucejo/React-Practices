import { useState } from "react";
import { set } from "react-hook-form";

function Progressbar() {
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
        <form action="">
          <input
            type="number"
            name="percent"
            id="percent"
            onChange={handleChange}
          />{" "}
          Input percentage
        </form>
      </div>
    </div>
  );
}
export default Progressbar;