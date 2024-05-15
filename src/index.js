import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Qualification from "./components/Qualification/Qualification";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Themes from "./components/Themes/Themes";
class Portfolio extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main className="main">
          <Home />
          <Themes />
          <About />
          <Skills />
          <Services />
          <Qualification />
          <Work />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </React.Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/portfolio-of-santhosh-sivakumar" element={<Portfolio />} />
    </Routes>
  </Router>
);
