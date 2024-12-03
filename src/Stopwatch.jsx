import { useState, useRef } from "react";
import Navigator from "./Navigator.jsx";

function Stopwatch() {
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

  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <h1>Stopwatch</h1>
      <p>
        {mins} mins {sec} secs
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1em",
          justifyContent: "center",
        }}
      >
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

      <Navigator back="/" next="/todo" />
    </div>
  );
}
export default Stopwatch;
