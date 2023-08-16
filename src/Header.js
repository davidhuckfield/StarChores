import './Header.css';
import TestLogo from "./images/Test_Logo.svg"

function Header() {
  return (
    <div className="Header">

      <img className="logo" src={TestLogo} alt="Star Chores Logo" />
      <ul className="navbar">
        <li>about</li>
        <li>contact</li>
        <li>services</li>
        <li>faq</li>
      </ul>

    </div>
  );
}

export default Header;