import ReactDOM from "react-dom/client";
import React from "react";

import { App } from "./App";

import "./index.css";

const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
