import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Maxcount() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(10);
  const timeLeft = useRef(null);
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
  // timmer();
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Maxcount</h1>
      <p>{count}</p>
      <p>Time left: {time}</p>
      <button onClick={timmer} id="plusBtn">
        +
      </button>
    </div>
  );
}

export default Maxcount;
