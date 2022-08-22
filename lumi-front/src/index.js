import React from "react";
import { createPortal } from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import Footer from "./Components/Footer/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <App />
    {createPortal(<Footer/>, document.getElementById('footer'))}
  </>
);
