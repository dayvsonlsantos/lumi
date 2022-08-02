import React from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { DarkMode, DarkModeMobile } from "./Style.ToggleMode";

export const ToggleMode = ({ theme, toggleTheme }) => {

  return (
    <DarkMode onClick={toggleTheme}>
      {theme === "light" ? (
        <MdDarkMode/>
      ) : (
        <MdLightMode/>
      )}
    </DarkMode>
  );
};

export const ToggleModeMobile = ({ theme, toggleTheme }) => {

  return (
    <DarkModeMobile onClick={toggleTheme}>
      {theme === "light" ? (
        <div>
          <MdDarkMode/>
          <span>Modo Escuro</span>
        </div>
      ) : (
        <div>
          <MdLightMode/>
          <span>Modo Claro</span>
        </div>
      )}
    </DarkModeMobile>
  );
};
