import React, { useState } from 'react';
import logo from '../assets/images/f1fanpage-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between h-auto py-3">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold">
              {/* Logo */}
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </a>
          </div>
          <div className="hidden md:flex space-x-8 items-center text-xl">
            {/* Links for larger screens */}
            <Link to="/drivers" className="text-white hover:text-gray-300">
              Drivers
            </Link>
            <Link to="/constructors" className="text-white hover:text-gray-300">
              Constructors
            </Link>
          </div>

          {/* Hamburger Icon for small screens */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 py-2 space-y-2">
          <Link to="/drivers" className="block text-white hover:text-gray-300 px-4">
            Drivers
          </Link>
          <Link to="/constructors" className="block text-white hover:text-gray-300 px-4">
            Constructors
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
