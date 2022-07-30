import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { DarkMode, DarkModeMobile } from "./ToggleModeDesign";

export const ToggleMode = ({ theme, toggleTheme }) => {
  const svg_sun_set_color_size = { color: "#7f75ff", fontSize: "2rem" };
  const svg_moon_set_color_size = { color: "#564AFF", fontSize: "2rem" };

  return (
    <DarkMode onClick={toggleTheme}>
      {theme === "light" ? (
        <MdDarkMode style={svg_moon_set_color_size} />
      ) : (
        <MdLightMode style={svg_sun_set_color_size} />
      )}
    </DarkMode>
  );
};

export const ToggleModeMobile = ({ theme, toggleTheme }) => {
  const svg_sun_set_color_size = { color: "#7f75ff", fontSize: "2rem" };
  const svg_moon_set_color_size = { color: "#564AFF", fontSize: "2rem" };

  return (
    <DarkModeMobile onClick={toggleTheme}>
      {theme === "light" ? (
        <div>
          <MdDarkMode style={svg_moon_set_color_size} />
          <span>Modo Escuro</span>
        </div>
      ) : (
        <div>
          <MdLightMode style={svg_sun_set_color_size} />
          <span>Modo Claro</span>
        </div>
      )}
    </DarkModeMobile>
  );
};
