import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [loginDropdownOpen, setLoginDropdownOpen] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginDropdownOpen &&
        !event.target.closest(".login-dropdown")
      ) {
        setLoginDropdownOpen(false);
      }

      if (
        dropdownOpen &&
        !event.target.closest(".user-dropdown")
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () =>
      document.removeEventListener(
        "click",
        handleClickOutside
      );
  }, [loginDropdownOpen, dropdownOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 text-white shadow-lg flex justify-between items-center p-4 px-8 transition-all duration-300 ${
          isScrolled
            ? "bg-blue-700 shadow-xl"
            : "bg-blue-600"
        }`}
      >
        <div
          className="cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h2 className="text-2xl font-bold">
            EduFund Kenya
          </h2>
        </div>

        <ul className="flex list-none gap-8 m-0 p-0">
          <li>
            <Link
              to="/"
              className="hover:text-blue-200"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/scholarships"
              className="hover:text-blue-200"
            >
              Scholarships
            </Link>
          </li>

          <li>
            <Link
              to="/bursaries"
              className="hover:text-blue-200"
            >
              Bursaries
            </Link>
          </li>

          <li>
            <Link
              to="/apply"
              className="hover:text-blue-200"
            >
              Apply
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-blue-200"
            >
              About
            </Link>
          </li>
        </ul>

        <div className="flex gap-4 items-center">

          {isLoggedIn ? (
            <div className="relative user-dropdown">

              <button
                onClick={() =>
                  setDropdownOpen(!dropdownOpen)
                }
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg"
              >
                <span className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center font-bold">
                  {localStorage
                    .getItem("userEmail")
                    ?.charAt(0)
                    .toUpperCase() || "U"}
                </span>

                <span>
                  {localStorage
                    .getItem("userEmail")
                    ?.split("@")[0] || "User"}
                </span>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2">

                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    onClick={() =>
                      setDropdownOpen(false)
                    }
                  >
                    📊 Dashboard
                  </Link>

                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    onClick={() =>
                      setDropdownOpen(false)
                    }
                  >
                    👤 My Profile
                  </Link>

                  <Link
                    to="/my-applications"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-50"
                    onClick={() =>
                      setDropdownOpen(false)
                    }
                  >
                    📋 My Applications
                  </Link>

                  <hr />

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    🚪 Logout
                  </button>

                </div>
              )}
            </div>
          ) : (

            <div className="relative login-dropdown">

              <button
                onClick={() =>
                  setLoginDropdownOpen(
                    !loginDropdownOpen
                  )
                }
                className="bg-transparent border border-white px-4 py-2 rounded hover:bg-white hover:text-blue-600"
              >
                🔑 Login
              </button>

              {loginDropdownOpen && (

                <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-xl py-2">

                  <Link
                    to="/student-login"
                    onClick={() =>
                      setLoginDropdownOpen(false)
                    }
                    className="block px-4 py-3 hover:bg-blue-50 text-gray-700"
                  >
                    🎓 Student Login
                  </Link>

                  <Link
                    to="/hod-login"
                    onClick={() =>
                      setLoginDropdownOpen(false)
                    }
                    className="block px-4 py-3 hover:bg-blue-50 text-gray-700"
                  >
                    👨‍🏫 HOD Login
                  </Link>

                  <Link
                    to="/chief-login"
                    onClick={() =>
                      setLoginDropdownOpen(false)
                    }
                    className="block px-4 py-3 hover:bg-blue-50 text-gray-700"
                  >
                    🏛️ Chief Login
                  </Link>

                  <Link
                    to="/admin-login"
                    onClick={() =>
                      setLoginDropdownOpen(false)
                    }
                    className="block px-4 py-3 hover:bg-blue-50 text-gray-700"
                  >
                    🔑 Admin Login
                  </Link>

                </div>

              )}

            </div>

          )}

        </div>
      </nav>

      <div className="h-20"></div>
    </>
  );
}

export default Navbar;