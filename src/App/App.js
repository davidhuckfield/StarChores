import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import FAQ from "../FAQ/FAQ";

function App() {
  return (
    <div className="App">
    <Router>

    <Header />

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/faq" element={<FAQ/>} />
    </Routes>
    
    <Footer />
    
    </Router>
    </div>
  );
}

export default App;
