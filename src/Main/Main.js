import './Main.css';
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import FAQ from "../FAQ/FAQ";
import Prices from "../Prices/Prices";

function Main() {
  return (
<div className="main">
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/services" element={<Services/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/faq" element={<FAQ/>} />
  <Route path="/prices" element={<Prices/>} />
</Routes>
</div>
  );
}

export default Main;