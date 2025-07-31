import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

// BrainCircuit icon component
const BrainCircuit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 5a3 3 0 1 0-5.993.142" />
    <path d="M18 5a3 3 0 1 0-5.993.142" />
    <path d="M12 12a3 3 0 1 0-5.993.142" />
    <path d="M18 12a3 3 0 1 0-5.993.142" />
    <path d="M12 19a3 3 0 1 0-5.993.142" />
    <path d="M18 19a3 3 0 1 0-5.993.142" />
    <path d="M12 5v7" />
    <path d="M12 12v7" />
    <path d="M6.007 5.142A3 3 0 0 0 6 5a3 3 0 0 0 0 6a3 3 0 0 0 0 6" />
    <path d="M18.007 5.142A3 3 0 0 0 18 5a3 3 0 0 0 0 6a3 3 0 0 0 0 6" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isSignedIn, isLoaded } = useUser();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gray-900/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-white font-bold text-xl flex items-center"
            >
              <img
                src="/logo.png"
                alt="AbliHUB Logo"
                className="w-8 h-8 mr-2"
              />
              AbliHUB
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive("/")
                    ? "bg-gray-700 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                Home
              </Link>

              {/* Show different buttons based on authentication status */}
              {isLoaded && isSignedIn ? (
                // Authenticated user - show Dashboard button
                <Link
                  to="/dashboard"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive("/dashboard")
                      ? "bg-blue-700 text-white"
                      : "bg-gradient-to-r from-blue-600 to-slate-700 text-white hover:from-blue-700 hover:to-slate-800"
                  } transition-all transform hover:scale-105`}
                >
                  Dashboard
                </Link>
              ) : (
                // Unauthenticated user - show Login and Sign Up buttons
                <>
                  <Link
                    to="/login"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-gradient-to-r from-blue-600 to-slate-700 text-white hover:from-blue-700 hover:to-slate-800 px-4 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105"
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md border-t border-gray-700/50">
          <Link
            to="/"
            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
              isActive("/")
                ? "bg-gray-700 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>

          {/* Show different buttons based on authentication status */}
          {isLoaded && isSignedIn ? (
            // Authenticated user - show Dashboard button
            <Link
              to="/dashboard"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive("/dashboard")
                  ? "bg-blue-700 text-white"
                  : "bg-gradient-to-r from-blue-600 to-slate-700 text-white hover:from-blue-700 hover:to-slate-800"
              } transition-all`}
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
          ) : (
            // Unauthenticated user - show Login and Sign Up buttons
            <>
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-600 to-slate-700 text-white hover:from-blue-700 hover:to-slate-800 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
