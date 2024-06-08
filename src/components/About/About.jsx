// @ts-nocheck
import React, { useState } from "react";
import "./about.css";
import AboutImg from "../../assets/Santhosh.jpg";
import Info from "./Info";
import RESUME from "../../assets/santhosh-resume.pdf";

const About = () => {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
    }, 500);
  };

  return (
    <section className="about section" id="about">
      <h2 className="section__title">About</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img
          src={AboutImg}
          className="about__img"
          alt="Santhosh"
          loading="lazy"
          title="Santhosh"
        />

        <div className="about__data">
          <Info />

          <p className="about__description">
            As a software engineer, I specialize in creating robust applications
            and systems, leveraging years of experience and the latest
            technologies for innovative solutions.
          </p>
          <a
            download="santhosh-resume.pdf"
            href={RESUME}
            className="button button--flex"
            onClick={handleDownload}
          >
            {downloading ? "Downloading..." : "Download Resume"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
