import './About.css';
import Image from '../images/dummy_image_about.jpg';

function About() {
  return (
    <div className="About">
        <div className="AboutContainer">
          <div className="AboutImage">
            <img src={Image} alt="About Us" />
          </div>

          <div className="AboutText">
            <h1>ABOUT US</h1>
              <p id="p1">We are a well-established window cleaning company providing an exterior and interior window cleaning service to a high standard.</p>
              <p>We specialise in pure water fed pole system cleaning methods, reaching heights of up to 20 metres from ground level with state of the art lightweight carbon fibre poles.</p>
              <p>We are known for our safety-conscious approach, friendly operatives and competitive prices.</p>
              <p>We have been providing a professional window cleaning service since the early 1990s to a variety of businesses and residents within the West Midlands and beyond.</p>
              <p>Contact us today for a free no obligation quote!</p>
          </div>
        </div>
    </div>
  );
}

export default About;