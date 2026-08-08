import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Programs from "./components/Programs";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Programs />
      <Testimonials />
      <Blog />
      <Footer />

      <a
        className="whatsapp-float"
        href="https://wa.me/919007089970"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}

export default App;