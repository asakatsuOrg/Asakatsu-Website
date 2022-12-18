import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const ThemeContext = createContext({
  darkMode: false,
  setDarkMode: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkModeAsakatsu", false);

  const value = { darkMode, setDarkMode };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
