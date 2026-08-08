import React from "react";
import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaLeaf,
} from "react-icons/fa";

function Footer() {
  return (
   <footer id="contact" className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-col">

          <div className="footer-logo">

            <div className="logo-icon">
              <FaLeaf />
            </div>

            <div>
              <h2>Fusion Fitness</h2>
              <span>Health & Wellness</span>
            </div>

          </div>

          <p className="footer-text">
            Fusion Fitness is committed to helping people achieve a
            healthier and happier lifestyle through personalized
            fitness coaching, nutrition guidance, wellness programs,
            yoga, and holistic health solutions.
          </p>

          <div className="footer-social">

            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <FaYoutube />
            </a>

            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-col">

          <h3>Quick Links</h3>

          <ul>

            <li><a href="/">Home</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Programs</a></li>
            <li><a href="/">Testimonials</a></li>
            <li><a href="/">Blog</a></li>

          </ul>

        </div>

        {/* Services */}

        <div className="footer-col">

          <h3>Our Services</h3>

          <ul>

            <li>Nutrition Counseling</li>
            <li>Weight Loss Program</li>
            <li>Weight Gain Program</li>
            <li>PCOS Wellness</li>
            <li>Yoga & Meditation</li>
            <li>Lifestyle Coaching</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-col">

          <h3>Contact Us</h3>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>1c/ Kustia Rd, Picnic Garden, opposite merlin iland building, Tiljala, Kolkata, West Bengal 700039, India</span>
          </div>

          <div className="contact-item">
            <FaPhoneAlt />
            <a href="tel:+919007089970">+91 9007089970</a>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <a href="mailto:fusionfitness365@gmail.com">fusionfitness365@gmail.com</a>
          </div>

          <div className="contact-item">
            <FaGlobe />
            <span>www.fitfusionclub.com</span>
          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="footer-bottom">

        <p>
          © 2026 Fusion Fitness. All Rights Reserved.
        </p>

        <div className="footer-links">

          <a href="/">Privacy Policy</a>

          <span>|</span>

          <a href="/">Terms & Conditions</a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;