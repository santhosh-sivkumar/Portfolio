import React, { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const tabs = [
    {
      id: 1,
      title: "Education",
      icon: "uil uil-graduation-cap qualification__icon",
    },
    {
      id: 2,
      title: "Experience",
      icon: "uil uil-briefcase-alt qualification__icon",
    },
  ];

  const educationData = [
    {
      title: "BE.ECE",
      subtitle: "Rathinam Technical Campus - Coimbatore",
      calendar: "2018 - 2022",
    },
    {
      title: "HSC",
      subtitle: "Malar Matric. Hr. Sec. School - Karur",
      calendar: "2017 - 2018",
    },
    {
      title: "SSLC",
      subtitle: "GHS Manavadi - Karur",
      calendar: "2015 - 2016",
    },
  ];

  const experienceData = [
    {
      title: "Software Engineer L3",
      subtitle: "ClaySys Technologies PVT LTD - Coimbatore, TN",
      calendar: "OCT 2022 - OCT 2023",
    },
    {
      title: "Software Engineer L1",
      subtitle: "ClaySys Technologies PVT LTD - Coimbatore, TN",
      calendar: "MAR 2022 - OCT 2022",
    },
  ];

  const renderContent = (data) => {
    return data.map((item, index) => {
      const commonContent = (
        <div>
          <h3 className="qualification__title">{item.title}</h3>
          <span className="qualification__subtitle">{item.subtitle}</span>
          <div className="qualification__calendar">
            <i className="uil uil-calendar-alt"></i>
            {item.calendar}
          </div>
        </div>
      );

      const commonElements = (
        <div>
          <span className="qualification__rounder"></span>
          <span className="qualification__line"></span>
        </div>
      );

      return (
        <div className="qualification__data" key={index}>
          {index % 2 === 0 ? ( // Condition for adding the empty div and two spans at the bottom
            <>
              {commonContent}
              {commonElements}
            </>
          ) : (
            // Condition for adding the empty div and two spans at the top
            <>
              <div></div>
              {commonElements}
              {commonContent}
            </>
          )}
        </div>
      );
    });
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={
                toggleState === tab.id
                  ? "qualification__button qualification__active button--flex"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(tab.id)}
            >
              <i className={tab.icon}></i>
              {tab.title}
            </div>
          ))}
        </div>
        <div className="qualification__sections">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={
                toggleState === tab.id
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {toggleState === tab.id
                ? renderContent(tab.id === 1 ? educationData : experienceData)
                : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
