import "../../../../Styles/inputFields.css";
import "../../../../Styles/localStyles.scss";

const InputFieldCode = (props) => {

  // Recebendo as props

    const {
      label,
      onChange,
      id,
      inputValueColor,
      inputColor,
      ...inputProps
    } = props;

  //-----------------------------------------------------------------------
 
  
  return (

    /* Css: inputFields.css */

    <div className="inputFields">
      <label htmlFor={id}>{label}</label>
      <input
        
        /* Explicação de cada elemento, pode ser lida no componente InputFieldReg.js */

        {...inputProps}
        onChange={onChange}
        className="inputFields inputResponsiv" /* Classe inputResponsiv: localStyles.scss */
        style={{ color: inputValueColor, background: inputColor }}
      />
    </div>
  );
};

export default InputFieldCode;
