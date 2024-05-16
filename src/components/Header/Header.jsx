import React, { useState, useEffect, useRef } from "react";
import "./header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [headerScroll, setHeaderScroll] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
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
        setHeaderScroll(true);
      } else {
        setHeaderScroll(false);
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, []);

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    setToggle(false);
  };

  return (
    <header
      className={`header ${headerScroll ? "scroll-header" : ""}`}
      ref={headerRef}
    >
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
              // { id: "services", text: "Services", icon: "briefcase-alt" },
              { id: "portfolio", text: "Portfolio", icon: "scenery" },
              { id: "contact", text: "Contact", icon: "message" },
            ].map((item) => (
              <NavItem
                key={item.id}
                item={item}
                activeNav={activeNav}
                handleNavClick={handleNavClick}
              />
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggle(!toggle)}
          />
        </div>

        <div className="nav__open" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

const NavItem = ({ item, activeNav, handleNavClick }) => {
  return (
    <li className="nav_item">
      <a
        {...(item.scrollBackToHomeId && {
          id: item.scrollBackToHomeId,
        })}
        href={`#${item.id}`}
        onClick={() => handleNavClick(`#${item.id}`)}
        className={
          activeNav === `#${item.id}` ? "nav__link active-link" : "nav__link"
        }
      >
        <i className={`uil uil-${item.icon} nav__icon`}></i>
        {item.text}
      </a>
    </li>
  );
};

// Function to debounce scroll event
const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export default Header;
