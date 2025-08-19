import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import playfulPie from "../assets/playfulPie.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md px-4 md:px-16 lg:px-60">
      <div className="flex items-center justify-between">
        {/* Left navigation links (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link to="/" className="hover:text-[#FDB72C] transition">
            HOME
          </Link>
          <Link to="/about" className="hover:text-[#FDB72C] transition">
            ABOUT
          </Link>
          <Link to="/menu" className="hover:text-[#FDB72C] transition">
            OUR MENU
          </Link>
        </div>

        {/* Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-auto ml-6 md:ml-0">
          <img
            src={playfulPie}
            alt="Pizza Logo"
            className="w-[60px] h-[55px]"
          />
        </div>

        {/* Right navigation links (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link to="/gallery" className="hover:text-[#FDB72C] transition">
            GALLERY
          </Link>
          <Link to="/contact" className="hover:text-[#FDB72C] transition">
            CONTACT
          </Link>
          <Link to="/order" className="bg-[#FDB72C] text-black px-4 py-7">
            ORDER NOW
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX size={28} /> : <HiOutlineMenuAlt3 size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col items-center space-y-4 mt-2 text-sm font-medium md:hidden">
          <Link
            to="/"
            className="hover:text-[#FDB72C] transition"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </Link>
          <Link
            to="/about"
            className="hover:text-[#FDB72C] transition"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            to="/menu"
            className="hover:text-[#FDB72C] transition"
            onClick={() => setMenuOpen(false)}
          >
            OUR MENU
          </Link>
          <Link
            to="/gallery"
            className="hover:text-[#FDB72C] transition"
            onClick={() => setMenuOpen(false)}
          >
            GALLERY
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#FDB72C] transition"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </Link>
          <Link
            to="/order"
            className="bg-[#FDB72C] text-black px-6 py-2"
            onClick={() => setMenuOpen(false)}
          >
            ORDER NOW
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
