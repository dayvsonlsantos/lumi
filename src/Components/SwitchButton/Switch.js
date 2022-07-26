import React from "react";
import "./Switch.css";

export const Switch = ({ ChangeSwitch, switchOption }) => {
  return switchOption ? (
    <input
      onClick={ChangeSwitch}
      className="toggle-input"
      type="checkbox"
      defaultChecked
    />
  ) : (
    <input onClick={ChangeSwitch} className="toggle-input" type="checkbox" />
  );
};
