import { createContext, useEffect, useState } from "react";
import { isSignedIn } from "../utils/Authentication";

export const UserContext = createContext({
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    isSignedIn((user) => {
      setCurrentUser(user);
    });
  }, []);

  const value = { currentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
