import React from "react";

const ServiceItem = ({
  iconClass,
  title,
  description,
  toggleState,
  index,
  modelListItems,
  toggleTab,
}) => {
  // Split the string received from modelListItems by "|"
  const modelItems = modelListItems.split("|");
  return (
    <div className="services__content">
      <div>
        <i className={`uil ${iconClass} services__icon`}></i>
        <h3 className="services__title">{title}</h3>
      </div>
      <span className="services__button" onClick={() => toggleTab(index)}>
        View More
        <i className="uil uil-arrow-right services__button-icon"></i>
      </span>

      <div
        className={
          toggleState === index
            ? "services__model active-model"
            : "services__model"
        }
      >
        <div className="services__model-content">
          <i
            className="uil uil-times services__model-close"
            onClick={() => toggleTab(0)}
          ></i>

          <h3 className="services__model-title">{title}</h3>
          <p className="services__model-description">{description}</p>
          <ul className="services__model-services grid">
            {/* Map through modelItems to render dynamic <li> elements */}
            {modelItems.map((item, i) => (
              <li key={i} className="services__model-service">
                <i className="uil uil-check-circle services__model-icon"></i>
                <p className="services__model-info">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
