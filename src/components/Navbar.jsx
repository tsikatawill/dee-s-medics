import React, { useState } from "react";
import Logo from "./Logo";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav
      className={`navbar overflow-hidden ${
        showMenu && "bg-white fixed w-full top-0 overflow-visible"
      }`}
    >
      <div className="container py-5 flex md:items-center justify-between relative z-50">
        <Logo />
        <ul
          className={`nav-links capitalize flex items-center whitespace-nowrap flex-col absolute md:relative md:flex-row w-full md:w-fit bg-white md:bg-transparent justify-between md:gap-5  ${
            showMenu
              ? "top-full border-t border-gray-500 left-0"
              : "-top-[300px] md:top-0 md:left-0"
          }`}
        >
          <li className="cursor-pointer hover:sm:bg-slate-200 w-full text-center py-2">
            Home
          </li>
          <li className="cursor-pointer hover:sm:bg-slate-200 w-full text-center py-2">
            About us
          </li>
          <li className="cursor-pointer hover:sm:bg-slate-200 w-full text-center py-2">
            How it works
          </li>
          <li className="cursor-pointer hover:sm:bg-slate-200 w-full text-center py-2">
            Doctors
          </li>
          <li className="cursor-pointer hover:sm:bg-slate-200 w-full text-center py-2">
            Contact us
          </li>
        </ul>
        <div className="cta md:inline-flex hidden">
          <button className="btn btn-primary">Get Started</button>
        </div>
        <button
          className="toggle md:hidden inline-flex"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
