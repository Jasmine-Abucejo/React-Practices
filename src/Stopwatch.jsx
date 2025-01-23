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
    <div className="text-center flex flex-col flex-1 justify-center items-center w-screen h-screen gap-4">
      <p className="mt-8 text-2xl font-extrabold">Stopwatch</p>
      <div className="flex flex-col items-center justify-center w-80 h-80 gap-4 bg-slate-500 bg-opacity-10">
        <p>
          {mins} mins {sec} secs
        </p>
        <div className="flex flex-row justify-center items-center gap-4 ">
          <button className="bg-green-600 p-3  rounded-lg" onClick={setTimer}>
            Start
          </button>
          <button className="bg-red-600 p-3 rounded-lg" onClick={stopTimer}>
            Stop
          </button>
          <button className="bg-yellow-400 p-3 rounded-lg" onClick={resetTimer}>
            Reset
          </button>
        </div>

        <Navigator back="/" next="/todo" />
      </div>
    </div>
  );
}
export default Stopwatch;
