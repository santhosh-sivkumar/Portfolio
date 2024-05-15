import React, { useState } from "react";
import "./services.css";
import ServiceItem from "./ServiceItem";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <ServiceItem
          iconClass="uil-web-grid"
          title="Product Designer"
          description="Crafting innovative solutions for clients and companies, with a proven track record in design excellence."
          toggleState={toggleState}
          index={1}
          modelListItems="I collaborate cross-functionally.|I prototype and refine.|I prioritize user-centricity."
          toggleTab={toggleTab}
        />

        <ServiceItem
          iconClass="uil-arrow"
          title="Ui/Ux Designer"
          description="Seasoned UI/UX designer offering quality solutions to clients and companies, with a proven track record."
          toggleState={toggleState}
          index={2}
          modelListItems="I develop the user interface.|Web page development.|I create ux element interactions."
          toggleTab={toggleTab}
        />

        <ServiceItem
          iconClass="uil-edit"
          title="Visual Designer"
          description="Experienced visual designer offering quality design services to clients and companies, backed by years of proven expertise."
          toggleState={toggleState}
          index={3}
          modelListItems="I develop visually stunning user interfaces.|I create cohesive brand experiences.|I collaborate closely with cross-functional teams.|I stay updated with industry trends.| Design and mockups of products for companies."
          toggleTab={toggleTab}
        />
      </div>
    </section>
  );
};

export default Services;
