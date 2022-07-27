import "./formLoginInput.css"; //css Local
import "../../../Styles/localStyles.scss"; //chamando classe input p/ responsividade
import { useState } from "react";

const FormLoginInput = (props) => {
  const [focused, setFocused] = useState(false);

  const {
    label,
    onChange,
    id,
    errorMessage,
    inputValueColor,
    inputColor,
    ...inputProps
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formLoginInput">
      <label htmlFor={id}>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        className="loginInputs input"
        style={{ color: inputValueColor, background: inputColor }}
      />
      <span className="spanfromForInput">{errorMessage}</span>
    </div>
  );
};

export default FormLoginInput;
