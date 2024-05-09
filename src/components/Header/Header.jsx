import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => {
        const navHeight = header.offsetHeight;
        const sectionTop = section.offsetTop - navHeight;
        const sectionHeight = section.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveNav(`#${section.id}`);
        }
      });

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
                scrollBackToHomeId: "homeScrolledUp",
                id: "home",
                text: "Home",
                icon: "estate",
              },
              { id: "about", text: "About", icon: "user" },
              { id: "skills", text: "Skills", icon: "file-alt" },
              { id: "services", text: "Services", icon: "briefcase-alt" },
              { id: "portfolio", text: "Portfolio", icon: "scenery" },
              { id: "contact", text: "Contact", icon: "message" },
            ].map((item) => (
              <li key={item.id} className="nav_item">
                <a
                  {...(item.scrollBackToHomeId && {
                    id: item.scrollBackToHomeId,
                  })}
                  href={`#${item.id}`}
                  onClick={() => handleNavClick(`#${item.id}`)}
                  className={
                    activeNav === `#${item.id}`
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
