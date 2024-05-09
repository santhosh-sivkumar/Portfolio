import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 20) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    setToggle(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Santhosh
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {[
              {
                id: "homeScrolledUp",
                href: "#home",
                text: "Home",
                icon: "estate",
              },
              { href: "#about", text: "About", icon: "user" },
              { href: "#skills", text: "Skills", icon: "file-alt" },
              { href: "#services", text: "Services", icon: "briefcase-alt" },
              { href: "#portfolio", text: "Portfolio", icon: "scenery" },
              { href: "#contact", text: "Contact", icon: "message" },
            ].map((item) => (
              <li key={item.href} className="nav_item">
                <a
                  {...(item.id && { id: item.id })}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={
                    activeNav === item.href
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className={`uil uil-${item.icon} nav__icon`}></i>
                  {item.text}
                </a>
              </li>
            ))}
          </ul>

          <i
            id="nav__close"
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
