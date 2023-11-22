import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";



function NavBar({loggedin, setLoggedin}) {
  return (
    <div className="flex justify-evenly">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy"></img>
      </Link>

      <nav>
        <ul className="flex gap-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
        </ul>
      </nav>

      <div className="flex gap-4 ml-4 ">
        {!loggedin && (
          <Link to="/Login">
            <button>Login</button>
          </Link>
        )}
        {!loggedin && (
          <Link to="/Signup">
            <button>Signup</button>
          </Link>
        )}
        {loggedin && (
          <Link to="/">
            <button
              onClick={() => {
                setLoggedin(false);
                toast.success("Logged out Successfully.");
              }}
            >
              Logout
            </button>
          </Link>
        )}
        {loggedin && (
          <Link to="/Dashboard">
            <button>Dashboard</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
