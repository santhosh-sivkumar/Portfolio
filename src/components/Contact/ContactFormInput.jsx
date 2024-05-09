import React from "react";

const ContactFormInput = ({ label, type, name, placeholder }) => (
  <div className="contact__form-div">
    <label htmlFor="" className="contact__form-tag">
      {label}
    </label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="contact__form-input"
      required
    />
  </div>
);

export default ContactFormInput;
