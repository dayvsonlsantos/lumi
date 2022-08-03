import { useState } from "react";
import { InputGroup } from "../../Styles.Modal";

const FormLoginInput = (props) => {
  const [focused, setFocused] = useState(false);

  // Recebendo as props

    const {
      label,
      onChange,
      id,
      errorMessage,
      ...inputProps
    } = props;

  //-----------------------------------------------------------------------


  // Função que permite a exibição do Span ao clicar fora do campo selecionado
    
  const handleFocus = (e) => {
      setFocused(true);
    };

  //------------------------------------------------------------------------    
  
  return (

    /* Css: inputFields.css */

    <InputGroup>
      <label htmlFor={id}>{label}</label>
      <input
        
        /* Explicação de cada elemento, pode ser lida no componente InputFieldReg.js */

        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </InputGroup>
  );
};

export default FormLoginInput;
