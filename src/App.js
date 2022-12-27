import React from "react"
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Footing from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom"
import './App.css';
import About from "./components/pages/About.js";
import Portfolio from "./components/pages/Portfolio.js";
import Contacts from "./components/pages/contactme";
import Resume from "./components/pages/Resume";


function App() {
  return (
    <Router>

      <Navbar />
      <Routes >
        <Route path="/" element={<About/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/Portfolio" element={<Portfolio/>} />
        <Route path="/Resume" element={<Resume/>} />
        <Route path="/contactme" element={<Contacts/>} />
      </Routes >

      <Footing />
    </Router>
  );
}

export default App;