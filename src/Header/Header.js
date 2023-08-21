import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import TextLogo from "../images/Text_Logo.svg"
import ImageLogo from "../images/Image_Logo.png"
import About from "../images/about.svg"
import Contact from "../images/contact.svg"
import Services from "../images/services.svg"
import FAQ from "../images/faq.svg"

function Header() {
  return (
    <header className="Header">
      <div className="logos">
        <img className="imagelogo" src={ImageLogo} alt="Star Chores Logo Cartoon" />
        <img className="textlogo" src={TextLogo} alt="Star Chores Logo Text" />
      </div>
      <ul className="navbar">
        <li><Link to="/about"><img className="about" src={About} alt="About Us" /></Link></li>
        <li><Link to="/contact"><img className="contact" src={Contact} alt="Contact Us" /></Link></li>
        <li><Link to="/services"><img className="services" src={Services} alt="Our Services" /></Link></li>
        <li><Link to="/faq"><img className="faq" src={FAQ} alt="Frequently Asked Questions" /></Link></li>
      </ul>

      </header>
  );
}

export default Header;