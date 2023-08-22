import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import TextLogo from "../images/Text_Logo.svg"
import ImageLogo from "../images/Image_Logo.png"
import AboutButton from "../NavButtons/AboutButton"
import ContactButton from "../NavButtons/ContactButton"
import ServicesButton from "../NavButtons/ServicesButton"
import FAQButton from "../NavButtons/FAQButton"

function Header() {
  return (
    <header className="Header">
      <div className="logos">
        <img className="imagelogo" src={ImageLogo} alt="Star Chores Logo Cartoon" />
        <img className="textlogo" src={TextLogo} alt="Star Chores Logo Text" />
      </div>
      <ul className="navbar">
        <li><Link to="/about"><AboutButton /></Link></li>
        <li><Link to="/contact"><ContactButton /></Link></li>
        <li><Link to="/services"><ServicesButton /></Link></li>
        <li><Link to="/faq"><FAQButton /></Link></li>
      </ul>

      </header>
  );
}

export default Header;