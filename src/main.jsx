import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/Store";

// Component
import Navbar from "./components/Navbar/Navbar";

import { ThemeProvider } from "./context/Theme"; // Dark & Light using localStorage
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <Navbar />
          <App />
          <Footer />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
