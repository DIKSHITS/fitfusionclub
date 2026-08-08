import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="container">

        {/* Logo */}
        <a href="#home" className="logo" onClick={closeMenu}>
          <img
            className="logo-image"
            src={logo}
            alt="Fusion Fitness Wellness Centre"
          />
        </a>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-open" : ""}>

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

        </nav>

        {/* Consultation Button */}
        <a
          href="#contact"
          className="consult-btn"
          onClick={closeMenu}
        >
          Book Consultation
        </a>

      </div>

    </header>
  );
};

export default Navbar;