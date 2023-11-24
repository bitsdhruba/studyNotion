import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";



function NavBar({loggedin, setLoggedin}) {
  return (
    <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading="lazy"></img>
      </Link>

      <nav>
        <ul className="flex gap-x-6 text-richblack-900">
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

      <div className="flex items-center gap-x-4 text-richblack-900">
        {!loggedin && (
          <Link to="/Login">
            <button className="bg-richblack-900 py-[8px] px-[12px] rounded-[8px] border border-richblue-700">
              Login
            </button>
          </Link>
        )}
        {!loggedin && (
          <Link to="/Signup">
            <button className="bg-richblack-900 py-[8px] px-[12px] rounded-[8px] border border-richblue-700">
              Signup
            </button>
          </Link>
        )}
        {loggedin && (
          <Link to="/">
            <button
              className="bg-richblack-900 py-[8px] px-[12px] rounded-[8px] border border-richblue-700"
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
            <button className="bg-richblack-900 py-[8px] px-[12px] rounded-[8px] border border-richblue-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
