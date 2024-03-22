import { Link } from "react-router-dom";
import logo from "../assets/Logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1D3557]">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="StudyNotion Logo" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-[#A8DADC] sm:mb-0 ">
            <li className="hover:underline me-4 md:me-6">About</li>
            <li className="hover:underline me-4 md:me-6">Privacy Policy</li>
            <li className="hover:underline me-4 md:me-6">Licensing</li>
            <li className="hover:underline">Contact</li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <span className="block text-sm text-[#A8DADC] sm:text-center ">
          © 2023{" "}
          <Link to="/" className="hover:underline">
            StudyNotion™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
