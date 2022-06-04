import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-slate-300">
      <div className="container py-5 sm:py-10 flex flex-col md:flex-row justify-between gap-20">
        <div className="dee">
          <Logo />
          <p className="mt-5 w-full md:w-52">
            Solution for living a healthy life in an easy and comfortable way.
          </p>
        </div>
        <div className="flex w-full sm:flex-row flex-col gap-20 justify-between">
          <div className="programs">
            <p className="font-bold text-white">Programs</p>
            <ul className="mt-5">
              <li>Learning modules</li>
              <li>Partnership</li>
              <li>Watch demo</li>
              <li>Event</li>
            </ul>
          </div>
          <div className="about">
            <p className="font-bold text-white">About</p>
            <ul className="mt-5">
              <li>Our company</li>
              <li>Career</li>
              <li>Investors relations</li>
              <li>Social impact</li>
            </ul>
          </div>
          <div className="resources">
            <p className="font-bold text-white">Resources</p>
            <ul className="mt-5">
              <li>Contact</li>
              <li>Give feedback</li>
              <li>System status</li>
              <li>Privacy policy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
