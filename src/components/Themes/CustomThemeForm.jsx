import React from "react";
import "./styles/CustomThemeForm.css";
import ButtonComponent from "./ButtonComponent";

function CustomThemeForm({
  colorProperties,
  colors,
  handleColorChange,
  handleSubmit,
  handleFormVisibility,
}) {
  return (
    <>
      {colorProperties.map((property, index) => (
        <label key={index} className="themes__model-title">
          {property.label}
          <input
            className="themes__form-input"
            type="text"
            name={property.name}
            value={colors[property.name]}
            onChange={handleColorChange}
            autoComplete="color"
          />
        </label>
      ))}
      <ButtonComponent
        buttonTitle="Save"
        buttonText="Save Theme"
        onClick={handleSubmit}
      />
      <ButtonComponent
        buttonTitle="Cancel"
        buttonText="Cancel"
        onClick={handleFormVisibility}
      />
    </>
  );
}

export default CustomThemeForm;
