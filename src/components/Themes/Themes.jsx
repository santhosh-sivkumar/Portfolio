import React, { useState, useEffect } from "react";
import "./styles/themes.css";
import ColorPicker from "./ColorPicker";
import ToggleSwitch from "./ToggleSwitch";

const Themes = () => {
  const [toggleState, setToggleState] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <>
      <button
        title="themes"
        type="button"
        className={`themes__button`}
        onClick={() => {
          setToggleState(!toggleState);
        }}
      >
        {!toggleState ? (
          <i className="bx bx-palette themes__icon"></i>
        ) : (
          <i className="bx bx-x themes__icon"></i>
        )}
      </button>
      <div
        className={
          toggleState === true ? "themes__model active-model" : "themes__model"
        }
      >
        <div className="themes__model-container">
          <div className="themes__model-content ">
            <ToggleSwitch
              id="DarkModeCheckbox"
              modelTitle={
                theme === "light" ? "Enable Dark Mode" : "Disable Dark Mode"
              }
              checked={theme === "dark"}
              onChange={handleThemeChange}
              icons={["bx bxs-sun ", "bx bxs-moon "]}
            />
          </div>
        </div>

        <ColorPicker />
      </div>
    </>
  );
};

export default Themes;
