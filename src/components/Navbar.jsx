import React from "react";
import { Link } from "react-router-dom";
import playfulPie from "../assets/playfulPie.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md px-60 flex items-center justify-between">
      {/* Left navigation links */}
      <div className="flex items-center space-x-8 text-sm font-medium">
        <Link to="/" className="hover:text-[#FDB72C]">
          HOME
        </Link>
        <Link to="/about" className="hover:text-[#FDB72C]">
          ABOUT
        </Link>
        <Link to="/menu" className="hover:text-[#FDB72C]">
          OUR MENU
        </Link>
      </div>

      {/* Centered logo */}
      <div className="flex items-center space-x-2">
        <img
          src={playfulPie}
          alt="Pizza Logo"
          className="w-[75px] h-[70px]"
        />
      </div>

      {/* Right navigation links */}
      <div className="flex items-center space-x-8 text-sm font-medium">
        <Link to="/gallery" className="hover:text-[#FDB72C]">
          GALLERY
        </Link>
        <Link to="/contact" className="hover:text-[#FDB72C]">
          CONTACT
        </Link>
        <Link to="/order" className="bg-[#FDB72C] text-black px-4 py-7  ">
          ORDER NOW
        </Link>
      </div>
    </nav>
  );
};

export default Navbar
