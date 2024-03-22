import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function PrivateRoute({ children }) {
  const { loggedin } = useContext(AppContext);

  if (loggedin) {
    return children;
  } else {
    <Navigate to="/login" />;
  }
}

export default PrivateRoute;
