import React from "react";
import "./App.css";
import { Card, ListGroup, Row, Col, Figure } from "react-bootstrap";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <div className="cover-image"></div>
        <Profile />
        <About />
        <Skills />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
