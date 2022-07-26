import React from "react";
import "./ToggleButton.css";
import styled from "styled-components";

const InputToggle = styled.input`
  background: ${({ theme }) => theme.background_modal};
  &:before {
    background: ${({ theme }) => theme.view_background};
  }
  &:checked {
    background: #7f75ff;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.17);
  }
`;

export const ToggleButton = ({ ChangeToggleButton, toggleButtonOption }) => {
  return toggleButtonOption ? (
    <InputToggle
      onClick={ChangeToggleButton}
      className="toggle-input"
      name="toggleButton"
      id="toggleButton"
      type="checkbox"
      defaultChecked
    />
  ) : (
    <InputToggle
      onClick={ChangeToggleButton}
      className="toggle-input"
      name="toggleButton"
      id="toggleButton"
      type="checkbox"
    />
  );
};
