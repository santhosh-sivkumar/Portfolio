import React from "react";

const ContactCard = ({ iconClass, title, data, link }) => (
  <div className="contact__card">
    <i className={iconClass}></i>
    <h3 className="contact__card-title">{title}</h3>
    <span className="contact__card-data">{data}</span>
    <a rel="noreferrer" href={link} target="_blank" className="contact__button">
      Write me
    </a>
    <i className="bx bx-right-arrow-alt contact__button-icon"></i>
  </div>
);
export default ContactCard;
