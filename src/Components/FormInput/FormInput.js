import "./formInput.css";
import styled from "styled-components";
import { useState } from "react";
import "../../Styles/localStyles.scss";

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

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const {
    label,
    onChange,
    id,
    errorMessage,
    ChangeToggleButton,
    inputValueColor,
    inputColor,
    toggleButtonOption,
    ...inputProps
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return label === "Prestar serviço ?" ? (
    <div className="toggleButton_div">
      <label htmlFor="toggleButton">Prestar serviço?</label>

      {toggleButtonOption==="true" ? (
        <InputToggle
          className="toggle-input"
          {...inputProps}
          onChange={onChange}
          onClick={ChangeToggleButton}
          defaultChecked
        />
      ) : (
        <InputToggle
          {...inputProps}
          onChange={onChange}
          onClick={ChangeToggleButton}
        />
      )}
    </div>
  ) : (
    <div className="formInput">
      <label htmlFor={id}>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          inputProps.name === "registerConf_Password" && setFocused(true)
        }
        focused={focused.toString()}
        className="registerInput input"
        style={{ color: inputValueColor, background: inputColor }}
      />
      <span className="spanfromForInput">{errorMessage}</span>
    </div>
  );
};

export default FormInput;
