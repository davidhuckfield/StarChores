import './Home.css';
import AboutButton from "../NavButtons/AboutButton.js"
import ContactButton from "../NavButtons/ContactButton.js"
import FAQButton from "../NavButtons/FAQButton.js"
import ServicesButton from "../NavButtons/ServicesButton.js"

function Home() {
  return (
    <div className="Home">
        <p>This is the home page</p>
        <AboutButton />
        <ContactButton />
        <FAQButton />
        <ServicesButton />
    </div>
  );
}

export default Home;