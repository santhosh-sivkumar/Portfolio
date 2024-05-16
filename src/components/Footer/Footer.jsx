import React from "react";
import "./footer.css";

const navigationItems = ["About", "Portfolio", "Skills"];

const socialLinks = [
  {
    href: "https://www.facebook.com/profile.php?id=100087186196856",
    iconClass: "bx bxl-facebook",
    title: "facebook-santhoshsivkumar",
  },
  {
    href: "https://www.instagram.com/santhoshsivkumar/",
    iconClass: "bx bxl-instagram",
    title: "instagram-santhoshsivkumar",
  },
  {
    href: "https://twitter.com/San_sivkumar",
    iconClass: "bx bxl-twitter",
    title: "twitter-santhoshsivkumar",
  },
];

const Footer = () => {
  const myName = " Santhosh Sivakumar";
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Let's work together...</h1>
        <ul className="footer__list">
          {navigationItems.map((title, index) => (
            <li key={index}>
              <a
                title={title}
                href={`#${title.toLowerCase()}`}
                className="footer__link"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <div className="footer__social">
          {socialLinks.map((link, index) => (
            <a
              title={link.title}
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
        <label title={myName} className="footer__codedBy">
          Coded By
          <span className="footer__ownerName">{myName}</span>
        </label>

        <label className="footer__copy">
          &#169; {new Date().getFullYear()} Created for Practice
          <i className="bx bx-wink-smile"></i>
        </label>
      </div>
    </footer>
  );
};

export default Footer;
