import React, { useCallback } from "react";
import "./styles/DefaultThemeButtons.css";

function DefaultThemeButtons({
  storedDefaultThemes,
  activeTheme,
  applyTheme,
  setActiveTheme,
  handleDeleteCustomTheme,
  handlehideThemesModel,
  enableColors,
}) {
  const handleClickEvent = useCallback(
    (theme, index, isCustomTheme) => {
      if (index === 0 && theme.name === "Delete Custom Themes") {
        handleDeleteCustomTheme();
      } else {
        applyTheme(theme.colors, index);
        setActiveTheme(index);
        if (!isCustomTheme) handlehideThemesModel();
      }
    },
    [applyTheme, setActiveTheme, handleDeleteCustomTheme, handlehideThemesModel]
  );

  return (
    <div className="themes_colors-container">
      {storedDefaultThemes.map(({ name, colors }, index) => {
        const isActive = activeTheme === index;
        const stylesClassName =
          index === 0 ? "themes_colors-button-clearThemes" : "";
        const isClearTheme = index === 0 && name === "Clear Themes";
        const isDeleteTheme = index === 0 && name === "Delete Custom Themes";
        const headerBackground = colors.headerColor || colors.textColor;
        const background = colors.backgroundColor || colors.textColor;
        const isCustomTheme = name.includes("Custom");
        return (
          <button
            title={name}
            type="button"
            key={index}
            onClick={() =>
              handleClickEvent({ name, colors }, index, isCustomTheme)
            }
            className={`themes_colors-button ${stylesClassName} ${
              isActive ? "themes_colors-button-active" : ""
            }`}
          >
            <div
              className={`themes_colors-button-top ${
                isActive ? "themes_colors-button-top-active" : ""
              }`}
              style={{ background: headerBackground }}
            />
            {isClearTheme && <i className="bx bx-minus-circle"></i>}
            {isDeleteTheme && <i className="bx bx-trash"></i>}
            <div
              className={`themes_colors-button-bottom ${
                isActive ? "themes_colors-button-bottom-active" : ""
              }`}
              style={{ background }}
            />
          </button>
        );
      })}
    </div>
  );
}

export default DefaultThemeButtons;
