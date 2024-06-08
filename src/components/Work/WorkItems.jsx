import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__button-container">
        <a
          title={item.demolink}
          href={item.demolink}
          target="_blank"
          rel="noreferrer"
          className="work__button"
        >
          Go to Live Link
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a
          title={item.demolink}
          href={item.codelink}
          target="_blank"
          rel="noreferrer"
          className="work__button"
        >
          View Code
          <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
