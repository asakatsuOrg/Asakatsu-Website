import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { UserProvider } from "./context/User";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <App />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
