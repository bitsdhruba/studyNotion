import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loggedin, setLoggedin] = useState(false);
  const [likedCourses, setLikedCourses] = useState([]);

  const value = {
    loggedin,
    setLoggedin,
    likedCourses,
    setLikedCourses,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
