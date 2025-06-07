import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

type NavBarProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const NavBar: React.FC<NavBarProps> = ({ darkMode, toggleDarkMode }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <nav
      className={`navbar navbar-expand-lg${
        darkMode ? " text-light" : " text-dark"
      }`}
      style={{
        background: darkMode ? "#181818" : "#fff",
        borderBottom: darkMode ? "1px solid #222" : "1px solid #eee",
        zIndex: 1040,
      }}
    >
      <div className="container-fluid">
        <Link
          to="/"
          className={`navbar-brand fw-bold${
            darkMode ? " text-light" : " text-dark"
          }`}
          style={{ textDecoration: "none" }}
        >
          🎬 Watmuvi
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse${expanded ? " show" : ""}`}>
          <div className="ms-auto d-flex align-items-center gap-2 flex-column flex-lg-row">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `btn btn-link${darkMode ? " text-light" : " text-dark"}${
                  isActive
                    ? darkMode
                      ? " fw-bold border-bottom border-light"
                      : " fw-bold active-light"
                    : ""
                }`
              }
              style={{ textDecoration: "none" }}
              onClick={() => setExpanded(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `btn btn-link${darkMode ? " text-light" : " text-dark"}${
                  isActive
                    ? darkMode
                      ? " fw-bold border-bottom border-light"
                      : " fw-bold active-light"
                    : ""
                }`
              }
              style={{ textDecoration: "none" }}
              onClick={() => setExpanded(false)}
            >
              About
            </NavLink>
            <button
              className={`btn btn-sm ms-lg-3 ${
                darkMode ? "btn-light" : "btn-dark"
              }`}
              onClick={toggleDarkMode}
              type="button"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
