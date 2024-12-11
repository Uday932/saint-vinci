import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Saint Vinci
          </Link>

          <button   
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none md:hidden"
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>

          <div className={`md:flex ${isOpen ? "block" : "hidden"} md:block`}>
            <Link
              to="/inscription"
              className="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-blue-600 transition duration-300 mx-2"
            >
              Inscription
            </Link>

            <Link
              to="/ClassRepartition"
              className="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-blue-600 transition duration-300 mx-2"
            >
              Liste des élèves
            </Link>

            <Link
              to="/ClotureAnnee"
              className="block mt-4 md:inline-block md:mt-0 text-gray-800 hover:text-blue-600 transition duration-300 mx-2"
            >
              Cloture classe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
