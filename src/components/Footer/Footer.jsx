import React from "react";
import "./footer.css";
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
          <a
            rel="noreferrer"
            href="https://www.facebook.com/profile.php?id=100087186196856"
            className="footer__social-link"
            target={"_blank"}
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            rel="noreferrer"
            href="https://www.instagram.com/santhoshsivkumar/"
            className="footer__social-link"
            target={"_blank"}
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            rel="noreferrer"
            href="https://twitter.com/San_sivkumar"
            className="footer__social-link"
            target={"_blank"}
          >
            <i class="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; 2024-2016 SanthoshSivakumar. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
