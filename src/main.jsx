import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

// Component
import Navbar from "./components/Navbar/Navbar";

import { UserProvider } from "./context/User"; // User's Information when signed in
import { ThemeProvider } from "./context/Theme"; // Dark & Light using localStorage
import { DropdownProvider } from "./context/Dropdown"; // A container which Profile and sign out button exits

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          <DropdownProvider>
            <Navbar />
          </DropdownProvider>
          <App />
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
