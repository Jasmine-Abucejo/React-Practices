import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Stopwatch() {
  const navigate = useNavigate();
  const [mins, setMins] = useState(0);
  const [sec, setSec] = useState(0);
  const timeRef = useRef(0);
  const setTimer = () => {
    timeRef.current = setInterval(() => {
      setSec((prev) => {
        if (prev === 59) {
          setMins((prev) => prev + 1);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(timeRef.current);
  };
  const resetTimer = () => {
    setMins(0);
    setSec(0);
  };
  const back = () => {
    navigate("/");
  };
  const next = () => {
    navigate("/todo");
  };
  return (
    <div>
      <h1>Stopwatch</h1>
      <p>
        {mins} mins {sec} secs
      </p>
      <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
        <button style={{ backgroundColor: "green" }} onClick={setTimer}>
          Start
        </button>
        <button style={{ backgroundColor: "red" }} onClick={stopTimer}>
          Stop
        </button>
        <button style={{ backgroundColor: "yellow" }} onClick={resetTimer}>
          Reset
        </button>
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
export default Stopwatch;
