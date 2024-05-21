import "./App.css";
import "./AdditionalStyles.css";
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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {loading && (
        <div className="site_body">
          <div className="dropping-texts">
            <div>Developers</div>
            <div>Designers</div>
            <div>Coders</div>
            <div>WELCOME !</div>
          </div>
        </div>
      )}
      {!loading && (
        <>
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
        </>
      )}
    </>
  );
}

export default App;
