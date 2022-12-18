import { createContext, useState } from "react";

export const DropdownContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const DropdownProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const value = { isOpen, setIsOpen };
  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};
