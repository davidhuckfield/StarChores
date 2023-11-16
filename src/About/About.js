import './About.css';
import Image from '../images/dummy_image_about.jpg';

function About() {
  return (
    <div className="About">
        <div className="AboutContainer">
          {/* <div className="AboutImage">
            <img src={Image} alt="About Us" />
          </div> */}

          <div className="AboutText bodytext">
              <p id="p1">Providing exterior cleaning services.</p>

          </div>
        </div>
    </div>
  );
}

export default About;