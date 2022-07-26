import React from "react";
import "./Switch.css";

export const Switch = ({ ChangeSwitch, switchOption }) => {
  return switchOption ? (

      <input onClick={ChangeSwitch} className="toggle-input" type="checkbox" />

  ) : (
    
    
      <input onClick={ChangeSwitch} className="toggle-input" type="checkbox" />
      
  );
};
