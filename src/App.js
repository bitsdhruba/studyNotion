import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import NavBar from './Components/NavBar';
import Login from './pages/Login';
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute";


function App() {
  
  const [loggedin, setLoggedin] = useState(false);
  
  return (
    <div className="w-screen h-screen bg-blue-500 flex flex-col ">
      <NavBar loggedin={loggedin} setLoggedin={setLoggedin} />

      <Routes>
        <Route path="/" element={<Home loggedin={loggedin}/>} />
        <Route path="/login" element={<Login setLoggedin={setLoggedin} />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute loggedin = {loggedin}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<SignUp setLoggedin={setLoggedin} />} />
      </Routes>
    </div>
  );
}

export default App;
