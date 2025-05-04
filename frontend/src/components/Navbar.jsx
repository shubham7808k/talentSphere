"use client";
import React, { useState } from "react";
import { FiArrowRight, FiLogIn } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white rounded-2xl shadow-md font-sans px-6 py-4 md:px-10 md:py-5">
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        {/* Logo */}
        <div className="text-3xl md:text-4xl font-extrabold text-gray-800">
          TalentSphere
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-6">
          {["Home", "Services", "About us", "Steps", "Gallery", "Visit Us"].map(
            (label) => (
              <a
                key={label}
                href={`#${label.replace(/\s+/g, "").toLowerCase()}`}
                className="text-lg text-gray-700 hover:text-blue-600 transition duration-200"
              >
                {label}
              </a>
            )
          )}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="/login"
            className="flex items-center gap-2 border border-[#4BA3A7] text-[#4BA3A7] hover:bg-[#4BA3A7] hover:text-white font-medium px-4 py-2 rounded-xl transition duration-200"
          >
            <FiLogIn className="text-lg" />
            Login
          </a>
          <a
            href="/login"
            className="flex items-center gap-2 bg-[#4BA3A7] text-white hover:bg-[#3b8b8f] font-medium px-4 py-2 rounded-xl transition duration-200"
          >
            Continue <FiArrowRight className="text-lg" />
          </a>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none ml-auto"
          aria-label="Toggle menu"
        >
          <img
            src={
              menuOpen
                ? "https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                : "https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
            }
            alt="menu"
            width={35}
            height={35}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          {["Home", "Services", "About us", "Steps", "Gallery", "Visit Us"].map(
            (label) => (
              <a
                key={label}
                href={`#${label.replace(/\s+/g, "").toLowerCase()}`}
                className="text-lg text-gray-700 hover:text-blue-600 transition duration-200"
              >
                {label}
              </a>
            )
          )}

          {/* Mobile Buttons */}
          <a
            href="/login"
            className="flex items-center justify-center gap-2 border border-[#4BA3A7] text-[#4BA3A7] hover:bg-[#4BA3A7] hover:text-white font-medium px-4 py-2 rounded-xl transition duration-200"
          >
            <FiLogIn className="text-lg" />
            Login
          </a>
          <a
            href="/login"
            className="flex items-center justify-center gap-2 bg-[#4BA3A7] text-white hover:bg-[#3b8b8f] font-medium px-4 py-2 rounded-xl transition duration-200"
          >
            Continue <FiArrowRight className="text-lg" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
