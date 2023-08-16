import './Header.css';
import FinalLogo from "./images/Final_Logo.svg"
import TestLogo from "./images/Test_Logo.svg"

function Header() {
  return (
    <div className="Header">

      <img className="logo" src={TestLogo} alt="Star Chores Logo" />
      
    </div>
  );
}

export default Header;