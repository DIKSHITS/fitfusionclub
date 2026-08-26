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

        {/* =====================================================
            COMPANY
        ====================================================== */}

        <div className="footer-col">

          <div className="footer-logo">

            <div className="logo-icon" aria-hidden="true">
              <FaLeaf />
            </div>

            <div>
              <h2>Fusion Fitness</h2>
              <span>Health &amp; Wellness</span>
            </div>

          </div>

          <p className="footer-text">
            Fusion Fitness is committed to helping people achieve a
            healthier and happier lifestyle through personalized
            fitness coaching, nutrition guidance, wellness programs,
            yoga, and holistic health solutions.
          </p>

          {/* =================================================
              SOCIAL LINKS
          ================================================== */}

          <div className="footer-social">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Fusion Fitness on Facebook"
            >
              <FaFacebookF aria-hidden="true" />
            </a>

            <a
              href="https://www.instagram.com/fusion_fitness24?igsh=MTVsaWxjZW16OG4wYg%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Fusion Fitness on Instagram"
            >
              <FaInstagram aria-hidden="true" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Fusion Fitness on YouTube"
            >
              <FaYoutube aria-hidden="true" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Fusion Fitness on Twitter"
            >
              <FaTwitter aria-hidden="true" />
            </a>

          </div>

        </div>


        {/* =====================================================
            QUICK LINKS
        ====================================================== */}

        <div className="footer-col">

          <h3>Quick Links</h3>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/#about">About Us</a>
            </li>

            <li>
              <a href="/#services">Services</a>
            </li>

            <li>
              <a href="/#programs">Programs</a>
            </li>

            <li>
              <a href="/#testimonials">Testimonials</a>
            </li>

            <li>
              <a href="/#blog">Blog</a>
            </li>
          </ul>

        </div>


        {/* =====================================================
            SERVICES
        ====================================================== */}

        <div className="footer-col">

          <h3>Our Services</h3>

          <ul>
            <li>Nutrition Counseling</li>
            <li>Weight Loss Program</li>
            <li>Weight Gain Program</li>
            <li>PCOS Wellness</li>
            <li>Yoga &amp; Meditation</li>
            <li>Lifestyle Coaching</li>
          </ul>

        </div>


        {/* =====================================================
            CONTACT
        ====================================================== */}

        <div className="footer-col">

          <h3>Contact Us</h3>

          <div className="contact-item">

            <FaMapMarkerAlt
              aria-hidden="true"
              focusable="false"
            />

            <address>
              1c/ Kustia Rd, Picnic Garden, opposite Merlin
              Island Building, Tiljala, Kolkata, West Bengal
              700039, India
            </address>

          </div>


          <div className="contact-item">

            <FaPhoneAlt
              aria-hidden="true"
              focusable="false"
            />

            <a href="tel:+919007089970">
              +91 9007089970
            </a>

          </div>


          <div className="contact-item">

            <FaEnvelope
              aria-hidden="true"
              focusable="false"
            />

            <a href="mailto:fusionfitness365@gmail.com">
              fusionfitness365@gmail.com
            </a>

          </div>


          <div className="contact-item">

            <FaGlobe
              aria-hidden="true"
              focusable="false"
            />

            <a
              href="https://fitfusionclub.com/"
              aria-label="Visit Fit Fusion Club website"
            >
              www.fitfusionclub.com
            </a>

          </div>

        </div>

      </div>


      {/* =====================================================
          FOOTER BOTTOM
      ====================================================== */}

      <div className="footer-bottom">

        <p>
          © 2026 Fusion Fitness. All Rights Reserved.
        </p>

        <div className="footer-links">

          <a href="/privacy-policy">
            Privacy Policy
          </a>

          <span aria-hidden="true">|</span>

          <a href="/terms-and-conditions">
            Terms &amp; Conditions
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;