import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const ToggleMode = ({ theme, toggleTheme }) => {
  const svg_sun_set_color_size = { color: "#7f75ff", fontSize: "2rem" };
  const svg_moon_set_color_size = { color: "#564AFF", fontSize: "2rem" };

  return (
    <>
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <MdDarkMode style={svg_moon_set_color_size} />
        ) : (
          <MdLightMode style={svg_sun_set_color_size} />
        )}
      </button>
    </>
  );
};
