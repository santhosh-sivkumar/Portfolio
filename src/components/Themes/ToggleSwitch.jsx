import React from "react";
import "./styles/ToggleSwitch.css";

const ToggleSwitch = ({ id, modelTitle, checked, onChange, icons }) => {
  return (
    <>
      <p className="themes__model-title">{modelTitle}</p>
      <div>
        <input
          type="checkbox"
          id={id}
          className="themes__model-input"
          checked={checked}
          onChange={onChange}
        />
        <label htmlFor={id} className={`toggle__switch-label ${id}-label`}>
          {icons.map((icon, index) => (
            <i key={index} className={`${icon} toggle__switch-icon`}></i>
          ))}
          <span className={`toggle__switch-ball ${id}-ball`}></span>
        </label>
      </div>
    </>
  );
};

export default ToggleSwitch;
