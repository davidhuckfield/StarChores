import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function App() {
  return (
    <Router>
    <div className="App">
    <Header />
    <Main />
    <Footer />
    </div>
    </Router>
  );
}

export default App;
