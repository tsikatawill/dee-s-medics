import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container py-5 flex items-center justify-between">
        <Logo />
        <ul className="nav-links capitalize flex items-center justify-between gap-5">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About us</li>
          <li className="cursor-pointer">How it works</li>
          <li className="cursor-pointer">Doctors</li>
          <li className="cursor-pointer">Contact us</li>
        </ul>
        <div className="cta">
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
