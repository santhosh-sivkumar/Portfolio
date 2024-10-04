import React from "react";
import "./styles/CustomThemeForm.css";
import ButtonComponent from "./ButtonComponent";

function CustomThemeForm({
  colorProperties,
  colors,
  handleColorChange,
  handleSubmit,
  handleFormVisibility,
  handlehideThemesModel,
}) {
  return (
    <>
      {colorProperties.map((property, index) => (
        <div className="themes__form-group">
          <label key={index} className="themes__model-title">
            {property.label}
          </label>
          <input
            className="themes__form-input"
            type="color"
            name={property.name}
            value={colors[property.name]}
            onChange={handleColorChange}
            autoComplete="color"
          />
        </div>
        // <label key={index} className="themes__model-title">
        //   {property.label}
        //   <input
        //     className="themes__form-input"
        //     type="text"
        //     name={property.name}
        //     value={colors[property.name]}
        //     onChange={handleColorChange}
        //     autoComplete="color"
        //   />
        // </label>
      ))}
      <ButtonComponent
        buttonTitle="Save"
        buttonText="Save Theme"
        onClick={() => {
          handleSubmit();
          setTimeout(() => {
            handlehideThemesModel();
          }, 300);
        }}
      />
      <ButtonComponent
        buttonTitle="Cancel"
        buttonText="Cancel"
        onClick={() => {
          handleFormVisibility();
        }}
      />
    </>
  );
}

export default CustomThemeForm;
