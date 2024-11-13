import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Zero");
  const increase = () => {
    setCount(count + 1);
    display(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
    display(count - 1);
  };
  const reset = () => {
    setCount(0);
    display(0);
  };
  const display = (newCount) => {
    if (newCount < 0) {
      setMessage("Negative");
    } else if (newCount === 0) {
      setMessage("Zero");
    } else {
      setMessage("Positive");
    }
  };
  const next = () => {
    navigate("/stopwatch");
  };
  return (
    <div style={{ justifyContent: "center" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={increase}>Increase</button>
        <div style={{ border: "solid black", margin: "1em", padding: "1em" }}>
          <p id="count"> {count} </p>
        </div>
        <button onClick={decrease}>Decrease</button>
        <br />
      </div>
      <button
        onClick={reset}
        style={{ display: "block", margin: "auto", marginTop: "1em" }}
      >
        Reset
      </button>
      <div
        style={{ border: "solid black", marginTop: "1em", textAlign: "center" }}
      >
        The current count value is: {message}
      </div>
      <button
        style={{ marginLeft: "90vw", marginTop: "1em", padding: "2em" }}
        onClick={next}
      >
        Next
      </button>
    </div>
  );
}

export default App;
