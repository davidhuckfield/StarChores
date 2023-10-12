import './Footer.css';
import AtSymbol from "../images/at_symbol.svg"

function Footer() {
  return (
    <div className="Footer">

    <p className="standard">07929632287</p>
    <a href="mailto:enquiries@starchores.co.uk">
    <div className="emailaddress">
      <p className="standard">enquiries</p>
      <img src={AtSymbol} alt="at symbol"/>
      <p className="standard">starchores.co.uk</p>
    </div>
    </a>
    </div>
  );
}

export default Footer;