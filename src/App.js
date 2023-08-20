import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">

      <Header />

      <p className="hollow">This is the hollow font</p>
      <p className="standard">This is the standard font</p>
      <p className="rounded">This is the rounded font</p>
      <p className="outline">This is the outline font</p>

      <p className="bodytext">TESTING IN ALL CAPITALS Blah blah blah this is the font from the films</p>
      
      <Footer />
    </div>
  );
}

export default App;
