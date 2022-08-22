//Style
import { InputGroup } from "../../../Styles.Modal";

function InputFieldCode (props) {

  const {
    label,
    onChange,
    id,
    inputValueColor,
    bgColorG,
    ...inputProps
  } = props;

  return (

    <InputGroup>
      <label htmlFor={id}>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
      />
    </InputGroup>
  );
};

export default InputFieldCode;
