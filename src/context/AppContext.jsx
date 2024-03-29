import axios from "axios";
import { createContext, useState } from "react";
import { courseapi } from "../api/api";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [loggedin, setLoggedin] = useState(false);

  const [courses, setCourses] = useState();
  const [load, setLoad] = useState(false);

  const fetchCourses = async () => {
    setLoad(true);
    const { data } = await axios.get(courseapi());
    const catagory = Object.values(data.data);
    setCourses(catagory);
    setLoad(false);
  };

  const value = {
    loggedin,
    setLoggedin,
    courses,
    load,
    fetchCourses,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
