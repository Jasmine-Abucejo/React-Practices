import { useState } from "react";
import Navigator from "./Navigator.jsx";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Zero");
  const increase = () => {
    setCount((c) => c + 1);
    display(count + 1);
  };
  const decrease = () => {
    setCount((c) => c - 1);
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

  return (
    <div className=" bg-gradient-to-tr from-white via-gray-900 to-violet-900 justify-center flex flex-1 w-screen h-screen">
      <div className="bg-white bg-opacity-10 w-60">
        <div className="flex flex-row justify-center items-center mt-8">
          <button
            onClick={decrease}
            className="text-red-500 font-bold text-stroke-black font-serif text-lg"
          >
            Decrease
          </button>
          <div className="m-4 font-black">
            <p id="count"> {count} </p>
          </div>
          <button
            onClick={increase}
            className="text-green-600 font-bold text-stroke-black font-serif text-lg"
          >
            Increase
          </button>
          <br />
        </div>
        <button
          onClick={reset}
          className="flex flex-row justify-center items-center mt-4 m-auto text-yellow-300 font-bold text-stroke-black font-serif text-lg"
        >
          Reset
        </button>
        <div className="text-center mt-4">
          The current count value is:{" "}
          <span
            className={`${count === 0 ? "text-yellow-300" : `${count > 0 ? "text-green-600" : "text-red-500"}`} `}
          >
            {message}
          </span>
        </div>
        <Navigator next="./stopwatch" />
      </div>
    </div>
  );
}

export default App;
