import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import NavBar from "./Components/NavBar";
import Login from "./pages/Login";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  const [loggedin, setLoggedin] = useState(false);

  return (
    <>
      <NavBar loggedin={loggedin} setLoggedin={setLoggedin} />

      <Routes>
        <Route path="/" element={<Home loggedin={loggedin} />} />
        <Route path="/login" element={<Login setLoggedin={setLoggedin} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute loggedin={loggedin}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<SignUp setLoggedin={setLoggedin} />} />
      </Routes>
    </>
  );
}

export default App;
