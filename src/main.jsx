import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Stopwatch from "./Stopwatch.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/stopwatch" element={<Stopwatch />} />
    </Routes>
  </BrowserRouter>
);
