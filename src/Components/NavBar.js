import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";
import toast from "react-hot-toast";

function NavBar({ loggedin, setLoggedin }) {
  return (
    <div className="flex justify-evenly items-center max-w-[1160px] h-16 bg-[#1D3557]">
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            width={160}
            height={32}
            loading="lazy"
          ></img>
        </Link>
      </div>

      <nav className="hidden sm:block">
        <ul className="flex gap-x-6 text-richblack-900 ">
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
            <button className="  text-white p-2 rounded-[8px] border border-richblue-700">
              Login
            </button>
          </Link>
        )}
        {!loggedin && (
          <Link to="/Signup">
            <button className=" text-white bg-[#E63946] p-2 rounded-[8px] border border-richblue-700">
              Signup
            </button>
          </Link>
        )}
        {loggedin && (
          <Link to="/">
            <button
              className="bg-richblack-900 p-2 rounded-[8px] border border-richblue-700 text-white"
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
            <button className="bg-[#E63946] text-white p-2 rounded-[8px] border border-richblue-700">
              Dashboard
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
