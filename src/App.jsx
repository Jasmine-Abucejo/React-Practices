import { useState } from "react";

function App() {
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
  const reset = () => setCount(0);
  const display = (newCount) => {
    console.log(document.getElementById("count").textContent);
    if (newCount < 0) {
      setMessage("Negative");
    } else if (newCount === 0) {
      setMessage("Zero");
    } else {
      setMessage("Positive");
    }
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
    </div>
  );
}

export default App;
