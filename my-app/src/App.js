import React from "react"
//import logo from './logo.svg';

import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Footer from "./components/Footer";
import Page from "./components/Page";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Page/>
      <Footer/>
    </div>
    
  );
}

export default App;
