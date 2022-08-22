import { useState } from "react";

//Style
import { InputGroup } from "../../../Styles.Modal";

function InputFieldFP (props) {
  const [focused, setFocused] = useState(false);

  const {
    label,
    onChange,
    id,
    errorMessage,
    inputValueColor,
    bgColorG,
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
        
        onFocus={() =>
          inputProps.name === "cpfFP" && setFocused(true)
        }
      />
      <span className="span_inputFields ">{errorMessage}</span>
    </InputGroup>
  );
};

export default InputFieldFP;
