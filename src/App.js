import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import BeforeAfter from "./components/BeforeAfter";

import { FaWhatsapp } from "react-icons/fa";


/* =========================================
   WHATSAPP BUTTON
========================================= */

function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/919007089970"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}


/* =========================================
   HOME PAGE
========================================= */

function Home() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Services />

        <About />

        <Programs />

        <Testimonials />

        <Blog />

      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}


/* =========================================
   CONTACT PAGE
========================================= */

function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <Contact />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}


/* =========================================
   BOOKING PAGE
========================================= */

function BookingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Booking />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}


/* =========================================
   BEFORE / AFTER PAGE
========================================= */

function BeforeAfterPage() {
  return (
    <>
      <Navbar />

      <main>
        <BeforeAfter />
      </main>

      <Footer />

      <WhatsAppButton />
    </>
  );
}


/* =========================================
   APP
========================================= */

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* ================================
            HOME
        ================================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* ================================
            CONTACT
        ================================= */}

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        <Route
          path="/before-after"
          element={<BeforeAfterPage />}
        />


        {/* ================================
            BOOK CONSULTATION
        ================================= */}

        <Route
          path="/booking"
          element={<BookingPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;