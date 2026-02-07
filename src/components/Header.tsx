import React, { useState } from "react";
import { Link } from "react-router-dom";
import HMLogo from "./HMLogo";

interface HeaderProps {
    openContact: () => void;
}

const Header: React.FC<HeaderProps> = ({ openContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-800 shadow-md z-50">
      <div className="mx-4 flex items-center h-16 px-4 sm:px-6 lg:px-8">
        {/* Left side: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="flex items-center gap-2">
            <HMLogo />
          </Link>
        </div>

        {/* Spacer pushes nav to right */}
        <div className="flex-1"></div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/services"
            className="text-gray-800 dark:text-gray-200 hover:text-purple-600 transition-colors"
          >
            Services
          </Link>
          {/* <Link
            to="/projects"
            className="text-gray-800 dark:text-gray-200 hover:text-purple-600 transition-colors"
          >
            Projects
          </Link> */}
          {/* Uncomment if needed */}
          <Link to="/about" className="text-gray-800 dark:text-gray-200 hover:text-purple-600">About</Link>
            <button
                onClick={openContact}
                className="text-gray-800 dark:text-gray-200 hover:text-purple-600"
            >
          Contact
        </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden h-[24px]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-gray-200 focus:outline-none p-0 m-0"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2 shadow-md border-t border-gray-200 dark:border-gray-700">
          <Link
            to="/services"
            className="block text-gray-800 dark:text-gray-200 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/projects"
            className="block text-gray-800 dark:text-gray-200 hover:text-purple-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          {/* Uncomment if needed */}
          <Link 
            to="/about" 
            className="block text-gray-800 dark:text-gray-200 hover:text-purple-600 transition-colors" 
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
            <button
                onClick={
                  () => {
                    openContact();
                    setIsOpen(false);
                  }
                }
                className="block text-gray-800 dark:text-gray-200 hover:text-purple-600 transition-colors"
            >
          Contact
        </button>
        </div>
      )}
    </header>
  );
};

export default Header;
