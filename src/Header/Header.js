import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import TextLogo from "../images/Text_Logo.svg"
import ImageLogo from "../images/Image_Logo.png"

function Header() {
  return (
    <header>
      <div className="logos">
        <img className="imagelogo" src={ImageLogo} alt="Star Chores Logo Cartoon" />
        <img className="textlogo" src={TextLogo} alt="Star Chores Logo Text" />
      </div>
      <ul className="navbar">
        <li><Link to="/about">about</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/services">services</Link></li>
        <li><Link to="/faq">faq</Link></li>
      </ul>

      </header>
  );
}

export default Header;