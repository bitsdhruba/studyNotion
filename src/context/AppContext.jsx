import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loggedin, setLoggedin] = useState(false);

  const value = {
    loggedin,
    setLoggedin,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
