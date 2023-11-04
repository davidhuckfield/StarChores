import './Footer.css';
import EmailAddress from "../NavButtons/EmailAddress"
import PhoneNumber from '../NavButtons/PhoneNumber';

function Footer() {
  return (
    <div className="Footer">
      <a href="tel:+447929632287">
      <PhoneNumber />
      </a>
      <a href="mailto:starchores@hotmail.com">
      <EmailAddress />
      </a>
    </div>
  );
}

export default Footer;