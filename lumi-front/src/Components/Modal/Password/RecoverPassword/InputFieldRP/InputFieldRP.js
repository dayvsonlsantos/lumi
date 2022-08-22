import { useState } from "react";

//Style
import { InputGroup } from "../../../Styles.Modal";

function InputFieldRP (props) {
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

        /*
          Faz com que o campo de confirmação de senha, já informe o span assim que clicar.
          (Evita que esse span só seja exibido ao clicar em enviar)
        */ 

        onFocus={() =>
          inputProps.name === "userConfPassword" && setFocused(true)
        }
      />
      <span>{errorMessage}</span>
    </InputGroup>
  );
};

export default InputFieldRP;
