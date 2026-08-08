import React from "react";
import "./Navbar.css";
import { FaLeaf } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="container">

        {/* Logo */}

        <div className="logo">

          <div className="logo-icon">
            <FaLeaf />
          </div>

          <div className="logo-text">
            <h2>Fusion Fitness</h2>
            <span>Wellness Centre</span>
          </div>

        </div>

        {/* Navigation */}

        <nav>

          <ul className="nav-links">

            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>

            <li>
              <a href="#about">
                About Us
              </a>
            </li>

            <li>
              <a href="#services">
                Services
              </a>
            </li>

            <li>
              <a href="#programs">
                Programs
              </a>
            </li>

            <li>
              <a href="#blog">
                Blog
              </a>
            </li>

            <li>
              <a href="#contact">
                Contact Us
              </a>
            </li>

          </ul>

        </nav>

        {/* Button */}

        <button className="consult-btn">
          Book Consultation
        </button>

      </div>

    </header>
  );
};

export default Navbar;