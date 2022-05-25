import React from "react";
import './App.css';
import NavBarTop from "./NavBarTop/NavBarTop.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './NavBarTop/Pages/Home.js';
import About from './NavBarTop/Pages/About.js';
import Contact from './NavBarTop/Pages/Contact.js';
import Report from "./NavBarTop/Pages/Report.js";
import User from "./NavBarTop/Pages/HomePageDesign/User";
// import SignUp from './pages/signup';
// import SignIn from './pages/signin';

function App() {
  return (
    <div className="app">
    <Router>
      <NavBarTop />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/report" element={<Report/>} />
        <Route path="/user" element={<User/>} />
        {/* <Route path="/signin" component={SignIn} />
        <Route path="/sign-up" component={SignUp} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;