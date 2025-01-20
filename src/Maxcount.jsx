import { useState, useRef, useEffect } from "react";
import Navigator from "./Navigator";

function Maxcount() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(10);
  const timeLeft = useRef(null);
  useEffect(() => {
    timmer();
  }, []);
  const addCount = () => {
    setCount((prev) => prev + 1);
  };
  const timmer = () => {
    timeLeft.current = window.setInterval(() => {
      console.log(timeLeft.current);
      setTime((prev) => {
        if (prev === 1) {
          clearInterval(timeLeft.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Maxcount</h1>
      <p>{count}</p>
      <p>Time left: {time}</p>
      {time > 0 ? (
        <button onClick={addCount} id="plusBtn">
          +
        </button>
      ) : (
        <p>Time is up!</p>
      )}

      <Navigator back="/colorpicker" next="/maxcount" />
    </div>
  );
}

export default Maxcount;
