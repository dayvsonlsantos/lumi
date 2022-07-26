import React from "react";

function ToggleButton({ event, isToggleOn }) {
  return (
    <>
      {isToggleOn === true ? (
        <input
          onClick={event}
          type="checkbox"
          name="togglebutton"
          id="togglebutton"
          defaultChecked
        />
      ) : (
        <input
          onClick={event}
          type="checkbox"
          name="togglebutton"
          id="togglebutton"
        />
      )}
    </>
  );
}

export default ToggleButton;
