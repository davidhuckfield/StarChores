import './Home.css';
import TestIcon from "../images/aboutcopy.svg"

function Home() {
  return (
    <div className="Home">
        <p>This is the home page</p>
        <img className="testicon" src={TestIcon} alt="Test Icon" />
    </div>
  );
}

export default Home;