import "./App.css";
import { useState, useEffect } from "react";

import About from "./components/About/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
// import Services from "./components/Services/Services";
import Qualification from "./components/Qualification/Qualification";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Themes from "./components/Themes/Themes";
import BarLoader from "react-spinners/BarLoader";

function App() {
  let [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });
  return (
    <>
      <div
        className="site_body"
        style={{
          visibility: loading ? "visible" : "hidden",
          display: !loading ? "none" : "flex",
        }}
      >
        <BarLoader
          className="loader"
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
      <div style={{ visibility: !loading ? "visible" : "hidden" }}>
        <Header />

        <main className="main">
          <Home />
          <Themes />
          <About />
          <Skills />
          {/* <Services /> */}
          <Qualification />
          <Work />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </div>
    </>
  );
}

export default App;
