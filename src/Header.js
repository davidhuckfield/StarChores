import './Header.css';
import TextLogo from "./images/Text_Logo.svg"
import ImageLogo from "./images/Image_Logo.png"

function Header() {
  return (
    <div className="Header">
      <div className="logos">
        <img className="imagelogo" src={ImageLogo} alt="Star Chores Logo Cartoon" />
        <img className="textlogo" src={TextLogo} alt="Star Chores Logo Text" />
      </div>
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