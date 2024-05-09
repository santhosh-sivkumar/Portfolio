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
          description="First Service with more than 1.5 years of experience. Providing quality work to clients and companies."
          toggleState={toggleState}
          index={1}
          modelListItems="I develop the user interface.|Web page development.|I create ux element interactions.|I position your company brand.|Design and mockups of products for companies."
          toggleTab={toggleTab}
        />

        <ServiceItem
          iconClass="uil-arrow"
          title="Ui/Ux Designer"
          description="Second Service with more than 1.5 years of experience. Providing quality work to clients and companies."
          toggleState={toggleState}
          index={2}
          modelListItems="I develop the user interface.|Web page development.|I create ux element interactions.|I position your company brand.|Design and mockups of products for companies."
          toggleTab={toggleTab}
        />

        <ServiceItem
          iconClass="uil-edit"
          title="Visual Designer"
          description="Third Service with more than 1.5 years of experience. Providing quality work to clients and companies."
          toggleState={toggleState}
          index={3}
          modelListItems="I develop the user interface.|Web page development.|I create ux element interactions.|I position your company brand.|Design and mockups of products for companies."
          toggleTab={toggleTab}
        />
      </div>
    </section>
  );
};

export default Services;
