import { createContext, useState } from "react";

export const LoggedInUserContext = createContext();

export function UserProvider({ children }) {
  const currentUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
  const [loggedInUser, setLoggedInUser] = useState(currentUser);
  return (
    <LoggedInUserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </LoggedInUserContext.Provider>
  );
}
