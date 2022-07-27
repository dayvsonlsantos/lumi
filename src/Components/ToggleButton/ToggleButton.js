import "./ToggleButton.css";
import styled from "styled-components";

export const InputToggle = styled.input`
  background: ${({ theme }) => theme.background_modal};
  &:before {
    background: ${({ theme }) => theme.view_background};
  }
  &:checked {
    background: #7f75ff;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.17);
  }
`;