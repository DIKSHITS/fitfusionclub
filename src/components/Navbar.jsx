import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* =========================
            LOGO
        ========================== */}

        <a
          href="#home"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Fusion Fitness Wellness Centre"
          />
        </a>


        {/* =========================
            DESKTOP / MOBILE NAV
        ========================== */}

        <nav className={`navbar-nav ${menuOpen ? "menu-open" : ""}`}>

          <ul className="nav-links">

            <li>
              <a
                href="#home"
                className="active"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={closeMenu}
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#programs"
                onClick={closeMenu}
              >
                Programs
              </a>
            </li>

            <li>
              <a
                href="#blog"
                onClick={closeMenu}
              >
                Blog
              </a>
            </li>

            <li>
              <a
                href="#contact"
                onClick={closeMenu}
              >
                Contact Us
              </a>
            </li>

          </ul>


          {/* Mobile Consultation Button */}

          <a
            href="#contact"
            className="mobile-consult-btn"
            onClick={closeMenu}
          >
            Book Consultation
          </a>

        </nav>


        {/* =========================
            DESKTOP BUTTON
        ========================== */}

        <a
          href="#contact"
          className="consult-btn"
          onClick={closeMenu}
        >
          Book Consultation
        </a>


        {/* =========================
            HAMBURGER BUTTON
        ========================== */}

        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </div>


      {/* =========================
          MOBILE OVERLAY
      ========================== */}

      {menuOpen && (
        <div
          className="menu-overlay"
          onClick={closeMenu}
        ></div>
      )}

    </header>
  );
};

export default Navbar;