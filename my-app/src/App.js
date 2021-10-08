import React from "react"
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import Footing from "./components/Footer/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import About from "./components/pages/About.js";
import Portfolio from "./components/pages/Portfolio.js";
import Contact from "./components/pages/Contact.js";
import Resume from "./components/pages/Resume";


function App() {
  return (
    <Router>
      
      <Navbar/>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/about" exact component={About} />
        <Route path="/Portfolio" exact component={Portfolio} />
        <Route path="/Resume" exact component={Resume} />
        <Route path="/Contact" exact component={Contact} />
      </Switch>
      <Footing/>
    </Router>
  );
}

export default App;