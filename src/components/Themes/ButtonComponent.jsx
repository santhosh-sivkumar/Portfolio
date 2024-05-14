import React from "react";
import "./styles/ButtonComponent.css";

function ButtonComponent({ className, buttonTitle, buttonText, onClick }) {
  return (
    <button
      title={buttonTitle}
      type="button"
      className={`themes__form-inputbtn ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
}

export default ButtonComponent;
