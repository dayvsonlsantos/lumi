import { useState } from "react";

//Style
import { InputGroup } from "../../../Styles.Modal";

function FormLoginInput (props) {
  const [focused, setFocused] = useState(false);

  const {
    label,
    onChange,
    id,
    errorMessage,
    ...inputProps
  } = props;
  
  //Exibir Span ao preencher campo erroneamente
  const showMessage = (e) => {setFocused(true)}; 
  
  return (
    <InputGroup>
      <label htmlFor={id}>{label}</label>
      
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={showMessage}
        focused={focused.toString()}
      />

      <span>{errorMessage}</span>
      
    </InputGroup>
  );
};

export default FormLoginInput;
