import './App.css';
import FinalLogo from "./images/Final_Logo.svg"
import TestLogo from "./images/Test_Logo.svg"

function App() {
  return (
    <div className="App">

      <img className="logo" src={FinalLogo} alt="Star Chores Logo" />
      <img className="logo" src={TestLogo} alt="Star Chores Logo" />

      <p className="hollow">This is the hollow font</p>
      <p className="standard">This is the standard font</p>
      <p className="rounded">This is the rounded font</p>
      <p className="outline">This is the outline font</p>
      <p className="testing">TESTING</p>
      
    </div>
  );
}

export default App;
