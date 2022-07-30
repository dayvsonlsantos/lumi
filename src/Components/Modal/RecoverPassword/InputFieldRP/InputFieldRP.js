import "../../../../Styles/inputFields.css";
import "../../../../Styles/localStyles.scss";
import { useState } from "react";

const InputFieldRP = (props) => {
  const [focused, setFocused] = useState(false);

  // Recebendo as props

    const {
      label,
      onChange,
      id,
      errorMessage,
      inputValueColor,
      bgColorG,
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

    <div className="inputFields">
      <label htmlFor={id}>{label}</label>
      <input
        
        /* Explicação de cada elemento, pode ser lida no componente InputFieldReg.js */

        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
        className="inputFields inputResponsiv" /* Classe inputResponsiv: localStyles.scss */
        style={{ color: inputValueColor, background: bgColorG }}

        /*
          Faz com que o campo de confirmação de senha, já informe o span assim que clicar.
          (Evita que esse span só seja exibido ao clicar em enviar)
        */ 
        onFocus={() =>
          inputProps.name === "confirmPasswordRecover" && setFocused(true)
        }
      />
      <span className="span_inputFields ">{errorMessage}</span>
    </div>
  );
};

export default InputFieldRP;
