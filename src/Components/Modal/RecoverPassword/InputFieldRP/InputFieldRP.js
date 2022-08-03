import { useState } from "react";
import { InputGroup } from "../../Styles.Modal";

const InputFieldRP = (props) => {
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

        /*
          Faz com que o campo de confirmação de senha, já informe o span assim que clicar.
          (Evita que esse span só seja exibido ao clicar em enviar)
        */ 
        onFocus={() =>
          inputProps.name === "confirmPasswordRecover" && setFocused(true)
        }
      />
      <span>{errorMessage}</span>
    </InputGroup>
  );
};

export default InputFieldRP;
