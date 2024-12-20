import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo/logo-img.jpg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center"> {/* Reduced padding for a shorter navbar */}
        {/* Logo Section */}
        <div className="flex items-center flex-col">
          <img
            src={logo}
            alt="Crypto Retrak Logo"
            className="h-20" // Adjusted logo size
          />
          <span className="text-sm text-gray-800 font-bold mt-2">CRYPTO RETRAK AGENCY</span> {/* Text below the logo */}
        </div>

        {/* Menu Links Section */}
        <div className="hidden md:flex space-x-8 text-gray-800 font-bold text-lg">
          <Link
            to="/"
            className="hover:text-[#4B5320] transition duration-300 transform hover:scale-110" // Army green hover effect
          >
            Home
          </Link>
          <Link
            to="/case"
            className="hover:text-[#4B5320] transition duration-300 transform hover:scale-110" // Army green hover effect
          >
            Case
          </Link>
          <Link
            to="/blog"
            className="hover:text-[#4B5320] transition duration-300 transform hover:scale-110" // Army green hover effect
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#4B5320] transition duration-300 transform hover:scale-110" // Army green hover effect
          >
            Contact
          </Link>
        </div>

        {/* Contact Info Section (Far right) */}
        <div className="hidden md:flex flex-col items-end text-gray-800 font-medium">
          <span className="text-sm font-bold">Contact us 24/7</span>
          <span className="text-sm mt-1 text-red-400 font-bold">1(757)235-2717</span> {/* Phone number */}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 py-4">
          <div className="flex flex-col space-y-4 px-6">
            <Link
              to="/"
              className="hover:text-[#4B5320] transition duration-300 transform hover:scale-110" // Army green hover effect
            >
              Home
            </Link>
            <Link
              to="/case"
              className="hover:text-[#4B5320] transition duration-300 transform hover:scale-110" // Army green hover effect
            >
              Case
            </Link>
            <Link
              to="/blog"
              className="hover:text-[#4B5320] transition duration-300 transform hover:scale-110" // Army green hover effect
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#4B5320] transition duration-300 transform hover:scale-110" // Army green hover effect
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
