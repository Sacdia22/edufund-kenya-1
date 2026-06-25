import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    // Handle scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setDropdownOpen(false);
    navigate("/");
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginDropdownOpen && !event.target.closest('.login-dropdown')) {
        setLoginDropdownOpen(false);
      }
      if (dropdownOpen && !event.target.closest('.user-dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [loginDropdownOpen, dropdownOpen]);

  return (
    <>
      {/* Fixed Navbar */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-blue-600 text-white shadow-lg flex justify-between items-center p-4 px-8 transition-all duration-300 ${
          isScrolled ? "bg-blue-700 shadow-xl" : "bg-blue-600"
        }`}
      >
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <h2 className="text-2xl font-bold">EduFund Kenya</h2>
        </div>

        <ul className="flex list-none gap-8 m-0 p-0">
          <li>
            <Link to="/" className="text-white no-underline hover:text-blue-200 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/scholarships" className="text-white no-underline hover:text-blue-200 transition-colors font-semibold">
              Scholarships
            </Link>
          </li>
          <li>
            <Link to="/bursaries" className="text-white no-underline hover:text-blue-200 transition-colors font-semibold">
              Bursaries
            </Link>
          </li>
          <li>
            <Link to="/apply" className="text-white no-underline hover:text-blue-200 transition-colors font-semibold">
              Apply
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white no-underline hover:text-blue-200 transition-colors">
              About
            </Link>
          </li>
        </ul>

        <div className="flex gap-4 items-center">
          {isLoggedIn ? (
            // User Logged In - Show user dropdown
            <div className="relative user-dropdown">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
              >
                <span className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                  {localStorage.getItem("userEmail")?.charAt(0).toUpperCase() || "U"}
                </span>
                <span className="hidden md:inline">
                  {localStorage.getItem("userEmail")?.split("@")[0] || "User"}
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* User Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="mr-2">📊</span> Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="mr-2">👤</span> My Profile
                  </Link>
                  <Link
                    to="/my-applications"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50 transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <span className="mr-2">📋</span> My Applications
                  </Link>
                  <hr className="my-1 border-gray-200" />
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <span className="mr-2">🚪</span> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // User Not Logged In - Login dropdown
            <div className="relative login-dropdown">
              <button
                onClick={() => setLoginDropdownOpen(!loginDropdownOpen)}
                className="bg-transparent text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-600 transition-all flex items-center gap-2"
              >
                <span>🔑</span> Login
                <svg className={`w-4 h-4 transition-transform ${loginDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Login Dropdown Menu */}
              {loginDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-2 z-50">
                  <Link
                    to="/login"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors border-b border-gray-100"
                    onClick={() => setLoginDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">👤</span>
                      <div>
                        <p className="font-semibold text-sm">User Login</p>
                        <p className="text-xs text-gray-500">Access scholarships & bursaries</p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/admin-login"
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 transition-colors"
                    onClick={() => setLoginDropdownOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🔑</span>
                      <div>
                        <p className="font-semibold text-sm">Admin Login</p>
                        <p className="text-xs text-gray-500">Manage platform & users</p>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}

export default Navbar;