import ReactDOM from "react-dom/client";
import React from "react";
import smoothscroll from "smoothscroll-polyfill";

import { App } from "./App";

import "./index.css";

smoothscroll.polyfill();
const domContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
