import React from "react";
import { Link } from "react-router-dom";

interface FooterProps {
    openContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ openContact }) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-4 shadow-inner z-40">
      <div className="mx-4 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} HM Coding. All rights reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex space-x-4 mt-2 md:mt-0">
          <Link
            to="/services"
            className="hover:text-purple-600 transition-colors"
          >
            Services
          </Link>
          {/* <Link
            to="/careers"
            className="hover:text-purple-600 transition-colors"
          >
            Careers
          </Link> */}
          {/* <Link
            to="/projects"
            className="hover:text-purple-600 transition-colors"
          >
            Projects
          </Link> */}
          <Link to="/about" className="hover:text-purple-600 transition-colors">About</Link>
          <button
                onClick={openContact}
                className="text-gray-800 dark:text-gray-200 hover:text-purple-600"
            >
          Contact
        </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
