import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Stopwatch from "./Stopwatch.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Todo from "./Todo.jsx";
import Progressbar from "./Progressbar.jsx";
import Submitform from "./Submitform.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/stopwatch" element={<Stopwatch />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/progressbar" element={<Progressbar />} />
      <Route path="/submitform" element={<Submitform />} />
    </Routes>
  </BrowserRouter>
);
