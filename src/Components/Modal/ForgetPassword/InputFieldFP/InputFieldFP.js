import "../../../../Styles/inputFields.css";
import "../../../../Styles/localStyles.scss";
import { useState } from "react";

const InputFieldFP = (props) => {
  const [focused, setFocused] = useState(false);

  // Recebendo as props

    const {
      label,
      onChange,
      id,
      errorMessage,
      inputValueColor,
      inputColor,
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
        style={{ color: inputValueColor, background: inputColor }}
      />
      <span className="span_inputFields ">{errorMessage}</span>
    </div>
  );
};

export default InputFieldFP;
