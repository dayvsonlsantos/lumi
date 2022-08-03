import { InputGroup } from "../../../Styles.Modal";

const InputFieldCode = (props) => {

  // Recebendo as props

    const {
      label,
      onChange,
      id,
      inputValueColor,
      bgColorG,
      ...inputProps
    } = props;

  //-----------------------------------------------------------------------
 
  
  return (

    /* Css: inputFields.css */

    <InputGroup>
      <label htmlFor={id}>{label}</label>
      <input
        
        /* Explicação de cada elemento, pode ser lida no componente InputFieldReg.js */

        {...inputProps}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default InputFieldCode;
