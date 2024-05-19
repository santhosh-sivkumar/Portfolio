import React, { useState, useEffect, useRef } from "react";
import "./styles/themes.css";
import ColorPicker from "./ColorPicker";
import ToggleSwitch from "./ToggleSwitch";

const Themes = () => {
  const modalRef = useRef();
  const [toggleState, setToggleState] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // To close model on clikcing out side of the model
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setToggleState(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setToggleState]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setToggleState(false);
  };
  const handlehideThemesModel = () => {
    setToggleState(false);
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
        ref={modalRef}
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

        <ColorPicker handlehideThemesModel={handlehideThemesModel} />
      </div>
    </>
  );
};

export default Themes;
