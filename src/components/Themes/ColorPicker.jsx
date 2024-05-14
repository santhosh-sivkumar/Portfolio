import React, { useState, useEffect, useCallback } from "react";
import "./styles/colorpicker.css";
import CustomThemeForm from "./CustomThemeForm";
import ToggleSwitch from "./ToggleSwitch";
import DefaultThemeButtons from "./DefaultThemeButtons";
import DefaultThemes from "./DefaultThemes.jsx";
import ColorProperties from "./ColorProperties.jsx";
import isEqual from "lodash/isEqual"; // Import isEqual function from lodash
import ButtonComponent from "./ButtonComponent.jsx";

function ColorPicker() {
  let storedDefaultThemes = DefaultThemes.get();
  let getstoredCustomThemes = localStorage.getItem("storedCustomThemes");
  let storedCustomThemes;
  if (getstoredCustomThemes) {
    storedCustomThemes = JSON.parse(getstoredCustomThemes);
  }

  const [showAddNewThemeBtn, setShowAddNewThemeBtn] = useState(true);

  const [colors, setColors] = useState(() => {
    const storedColors = {};
    ColorProperties.forEach((property) => {
      storedColors[property.name] = localStorage.getItem(property.name) || "";
    });
    return storedColors;
  });

  const [enableColors, setEnableColors] = useState(
    JSON.parse(localStorage.getItem("enableColors")) || false
  );
  // setting 2th theme as default page load theme
  const [activeThemeInDefaultThemes, setActiveThemeInDefaultThemes] = useState(
    () => {
      const storedActiveThemeInDefaultThemes = localStorage.getItem(
        "activeThemeInDefaultThemes"
      );
      return storedActiveThemeInDefaultThemes !== null
        ? parseInt(storedActiveThemeInDefaultThemes)
        : 2;
    }
  );
  const [activeThemeInCustomThemes, setActiveThemeInCustomThemes] = useState(
    () => {
      const storedactiveThemeInCustomThemes = localStorage.getItem(
        "activeThemeInCustomThemes"
      );
      return storedactiveThemeInCustomThemes !== null
        ? parseInt(storedactiveThemeInCustomThemes)
        : 0;
    }
  );

  const handleColorChange = (event) => {
    const { name, value } = event.target;
    setColors((prevColors) => ({
      ...prevColors,
      [name]: value,
    }));
  };

  const handleEnableChange = (event) => {
    const isChecked = event.target.checked;
    setEnableColors(isChecked);
    setShowAddNewThemeBtn(true);

    if (isChecked) {
      if (storedCustomThemes) {
        applyCustomTheme(
          storedCustomThemes[activeThemeInCustomThemes].colors,
          activeThemeInCustomThemes
        );
      }
    } else {
      applyDefaultTheme(
        storedDefaultThemes[activeThemeInDefaultThemes].colors,
        activeThemeInDefaultThemes
      );
    }
    localStorage.setItem("enableColors", isChecked);
  };
  const handleDeleteCustomTheme = () => {
    if (storedCustomThemes.length > 2) {
      const updatedThemes = storedCustomThemes.filter(
        (_, i) => i !== activeThemeInCustomThemes
      );
      localStorage.setItem("storedCustomThemes", JSON.stringify(updatedThemes));
      // If the currently active custom theme is deleted, switch to the first one
      applyCustomTheme(
        updatedThemes[storedCustomThemes.length - 2].colors,
        storedCustomThemes.length - 2
      );
      setShowAddNewThemeBtn(true);
    } else {
      localStorage.setItem("storedCustomThemes", []);
      applyDefaultTheme(
        storedDefaultThemes[activeThemeInDefaultThemes].colors,
        activeThemeInDefaultThemes
      );
    }
  };

  const handleSubmit = () => {
    setShowAddNewThemeBtn(true);
    if (enableColors) {
      ColorProperties.forEach((property) => {
        localStorage.setItem(property.name, colors[property.name]);
      });
    }

    const existingDefaultThemeIndex = storedDefaultThemes.findIndex(
      (theme) => isEqual(theme.colors, colors) // Using deep equality check
    );
    let existingCustomThemeIndex = -1;
    if (storedCustomThemes) {
      existingCustomThemeIndex = storedCustomThemes.findIndex(
        (theme) => isEqual(theme.colors, colors) // Using deep equality check
      );
    }

    if (existingDefaultThemeIndex !== -1) {
      applyDefaultTheme(
        storedDefaultThemes[existingDefaultThemeIndex].colors,
        existingDefaultThemeIndex
      );
    } else if (existingCustomThemeIndex !== -1) {
      applyCustomTheme(
        storedCustomThemes[existingCustomThemeIndex].colors,
        existingCustomThemeIndex
      );
    } else {
      const newCustomTheme = {
        name: `Custom Theme ${
          storedCustomThemes ? storedCustomThemes.length : 1
        }`,
        colors: { ...colors },
      };
      const updatedThemes = [
        ...(storedCustomThemes || [
          {
            name: "Delete Custom Themes",
            colors: {
              textColor: "",
              backgroundColor: "",
              headerColor: "",
            },
          },
        ]), // Use an empty array if storedCustomThemes is null or undefined
        newCustomTheme,
      ];
      localStorage.setItem("storedCustomThemes", JSON.stringify(updatedThemes));
      setActiveThemeInCustomThemes(updatedThemes.length - 1);
      localStorage.setItem(
        "activeThemeInCustomThemes",
        updatedThemes.length - 1
      );
      applyCustomTheme(newCustomTheme.colors, updatedThemes.length - 1);
    }
  };

  const applyDefaultTheme = useCallback(
    (themeColors, index) => {
      setColors(themeColors);
      setActiveThemeInDefaultThemes(index);
      ColorProperties.forEach((property) => {
        localStorage.setItem(property.name, themeColors[property.name]);
      });
      localStorage.setItem("enableColors", enableColors);
      localStorage.setItem("activeThemeInDefaultThemes", index);
    },
    [enableColors]
  );

  const applyCustomTheme = useCallback(
    (themeColors, index) => {
      setColors(themeColors);
      setActiveThemeInCustomThemes(index);
      ColorProperties.forEach((property) => {
        localStorage.setItem(property.name, themeColors[property.name]);
      });
      localStorage.setItem("enableColors", enableColors);
      localStorage.setItem("activeThemeInCustomThemes", index);
    },
    [enableColors]
  );
  useEffect(() => {
    const applyColors = () => {
      ColorProperties.forEach((property) => {
        document.documentElement.style.setProperty(
          property.cssVar,
          colors[property.name]
        );
      });
    };

    applyColors();
  }, [colors]);
  useEffect(() => {
    if (storedCustomThemes) {
      if (enableColors) {
        const storedThemeColors = {};
        ColorProperties.forEach((property) => {
          storedThemeColors[property.name] =
            localStorage.getItem(property.name) || "";
        });
        applyCustomTheme(storedThemeColors, activeThemeInCustomThemes);
      } else {
        applyCustomTheme(
          storedCustomThemes[activeThemeInCustomThemes].colors,
          activeThemeInCustomThemes
        );
      }
    }
    // eslint-disable-next-line
  }, [activeThemeInCustomThemes, enableColors]);
  useEffect(() => {
    if (enableColors) {
      const storedThemeColors = {};
      ColorProperties.forEach((property) => {
        storedThemeColors[property.name] =
          localStorage.getItem(property.name) || "";
      });
      applyDefaultTheme(storedThemeColors, activeThemeInDefaultThemes);
    } else {
      applyDefaultTheme(
        storedDefaultThemes[activeThemeInDefaultThemes].colors,
        activeThemeInDefaultThemes
      );
    }
    // eslint-disable-next-line
  }, [activeThemeInDefaultThemes, enableColors]);

  return (
    <>
      {/** Render default themes section */}
      <div className="themes__model-container">
        <div className="themes__model-content">
          <p className="themes__model-title">Default Themes</p>
        </div>
      </div>
      <div className="themes__model-container">
        <DefaultThemeButtons
          storedDefaultThemes={storedDefaultThemes}
          activeTheme={activeThemeInDefaultThemes}
          applyTheme={applyDefaultTheme}
          setActiveTheme={setActiveThemeInDefaultThemes}
        />
      </div>

      {/** Render toggle switch for custom themes */}
      <div className="themes__model-container">
        <div className="themes__model-content">
          <ToggleSwitch
            id="customThemeCheckbox"
            modelTitle={
              enableColors ? "Disable Custom Themes" : "Enable Custom Themes"
            }
            checked={enableColors}
            onChange={handleEnableChange}
            icons={["uil uil-check-circle", "uil uil-times-circle"]}
            containerClass="colorpicker-toggle-container"
          />
        </div>
      </div>
      {enableColors && storedCustomThemes && (
        <div className="themes__model-container">
          <div className="themes__model-content">
            <p className="themes__model-title">Custom Themes</p>
          </div>
        </div>
      )}

      {storedCustomThemes && enableColors && (
        <div className="themes__model-container">
          <DefaultThemeButtons
            storedDefaultThemes={storedCustomThemes}
            activeTheme={activeThemeInCustomThemes}
            applyTheme={applyCustomTheme}
            setActiveTheme={setActiveThemeInCustomThemes}
            handleDeleteCustomTheme={handleDeleteCustomTheme}
          />
        </div>
      )}
      {enableColors && showAddNewThemeBtn && (
        <div className="themes__model-container">
          <ButtonComponent
            className="AddNewTheme__buttonComponent"
            buttonTitle="Add New Theme"
            buttonText="Add New Theme"
            onClick={() => setShowAddNewThemeBtn(!showAddNewThemeBtn)}
          />
        </div>
      )}
      {/** Render custom theme form if custom themes are enabled */}
      {!showAddNewThemeBtn && enableColors && (
        <div className="themes__model-container">
          <CustomThemeForm
            colorProperties={ColorProperties}
            colors={colors}
            handleColorChange={handleColorChange}
            handleSubmit={handleSubmit}
            handleFormVisibility={() => setShowAddNewThemeBtn(true)}
          />
        </div>
      )}
    </>
  );
}

export default ColorPicker;
