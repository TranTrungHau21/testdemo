import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Welcome from "./Welcome";

// const elenment11 = <h1>Hello react</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));
function tick() {
  const element = <Welcome name="hau" />;
  root.render(element);
}

setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
