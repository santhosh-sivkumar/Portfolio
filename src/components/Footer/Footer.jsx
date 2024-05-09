import React from "react";
import "./footer.css";

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=100087186196856",
    iconClass: "bx bxl-facebook",
  },
  {
    href: "https://www.instagram.com/santhoshsivkumar/",
    iconClass: "bx bxl-instagram",
  },
  {
    href: "https://twitter.com/San_sivkumar",
    iconClass: "bx bxl-twitter",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Santhosh S</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
        </ul>

        <div className="footer__social">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="footer__social-link"
              target="_blank"
              rel="noreferrer"
            >
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>

        <span className="footer__copy">
          &#169; {new Date().getFullYear()} Santhosh Sivakumar
        </span>
      </div>
    </footer>
  );
};

export default Footer;
