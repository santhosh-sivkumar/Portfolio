import React from "react";

const ContactFormInput = ({ label, type, name, placeholder }) => {
  // Generate a unique id for each input field
  const inputId = `${name}-input`;

  return (
    <div className="contact__form-div">
      <label htmlFor={inputId} className="contact__form-tag">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={inputId} // Set the id attribute here
        placeholder={placeholder}
        className="contact__form-input"
        autoComplete={name}
        required
      />
    </div>
  );
};

export default ContactFormInput;
