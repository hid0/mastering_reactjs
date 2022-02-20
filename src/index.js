import React from "react";
import ReactDOM from "react-dom";
import Todo from "./next/TodoList";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <div className="font-sans bg-slate-50 pt-16 w-full h-screen">
      <Todo />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
