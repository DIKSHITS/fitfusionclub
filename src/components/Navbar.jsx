import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* =================================
            LOGO
        ================================== */}

        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Fusion Fitness Wellness Centre"
          />
        </Link>


        {/* =================================
            NAVIGATION
        ================================== */}

        <nav
          className={`navbar-nav ${
            menuOpen ? "menu-open" : ""
          }`}
        >

          <ul className="nav-links">

            {/* HOME */}

            <li>
              <Link
                to="/"
                className={
                  location.pathname === "/"
                    ? "active"
                    : ""
                }
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>


            {/* ABOUT */}

            <li>
              <a
                href="/#about"
                onClick={closeMenu}
              >
                About Us
              </a>
            </li>


            {/* SERVICES */}

            <li>
              <a
                href="/#services"
                onClick={closeMenu}
              >
                Services
              </a>
            </li>


            {/* PROGRAMS */}

            <li>
              <a
                href="/#programs"
                onClick={closeMenu}
              >
                Programs
              </a>
            </li>


            {/* BLOG */}

            <li>
              <a
                href="/#blog"
                onClick={closeMenu}
              >
                Blog
              </a>
            </li>


            {/* BEFORE / AFTER */}

            <li>
              <Link
                to="/before-after"
                className={
                  location.pathname === "/before-after"
                    ? "active"
                    : ""
                }
                onClick={closeMenu}
              >
                Transformation
              </Link>
            </li>


            {/* CONTACT PAGE */}

            <li>
              <Link
                to="/contact"
                className={
                  location.pathname === "/contact"
                    ? "active"
                    : ""
                }
                onClick={closeMenu}
              >
                Contact Us
              </Link>
            </li>

          </ul>


          {/* =================================
              MOBILE CONSULTATION
          ================================== */}

          <Link
            to="/booking"
            className="mobile-consult-btn"
            onClick={closeMenu}
          >
            Book Consultation
          </Link>

        </nav>


        {/* =================================
            DESKTOP CONSULTATION
        ================================== */}

        <Link
          to="/booking"
          className="consult-btn"
          onClick={closeMenu}
        >
          Book Consultation
        </Link>


        {/* =================================
            HAMBURGER
        ================================== */}

        <button
          type="button"
          className={`menu-toggle ${
            menuOpen ? "active" : ""
          }`}
          onClick={toggleMenu}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>


      {/* =================================
          MOBILE OVERLAY
      ================================== */}

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        ></div>
      )}

    </header>
  );
};

export default Navbar;