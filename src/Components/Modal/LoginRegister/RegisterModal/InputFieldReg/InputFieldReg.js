import { useState } from "react";
import {InputToggle} from "../../../../ToggleButton/ToggleButton"
import { InputGroup, Toggle } from "../../../Styles.Modal";

const FormInput = (props) => {
  

  const [focused, setFocused] = useState(false);
  

  // Recebendo as props

    const {
      label,
      onChange,
      id,
      errorMessage,
      ChangeToggleButton,
      toggleButtonOption,
      ...inputProps
    } = props;

  //-----------------------------------------------------------------------


  // Função que permite a exibição do Span ao clicar fora do campo selecionado
   
    const handleFocus = (e) => {
      setFocused(true);
    };

  //------------------------------------------------------------------------


  /*
  
    Se o label (atributo do input), for igual a "Prestar serviço ?" (definimos esse label no input do Toggle
    em RegisterModal), entrará na condição e exibirá o Toggle button. Caso não, exibirá os campos dos inputs, definidos anteriormente em RegisterModal, dentro da const inputs.

    *Essa verificação ocorre para cada campo, mas apenas o toggle possui esse valor em label
  */

  return label === "Prestar serviço ?" ? (
    <Toggle>
      <label htmlFor="toggleButton">Prestar serviço?</label>

      {toggleButtonOption==="true" ? (
        //Se o botão estiver ativo, então será retornado como checked, a partir do defaultChecked;
        <div>
        <InputToggle

          //Recebe todas as demais props
          {...inputProps}

          //Chama a função que seta os valores informados pelo usuário no seu respectivo input, função essa em (RegisterModal)
          onChange={onChange}

          //Chama a função ChangeToggleButton, localizada em RegisterModal
          onClick={ChangeToggleButton}

          defaultChecked

        />
        
        <span>Sim</span>
        </div>
        
      ) : (
        //Não estando ativo, retornará como desativado.
        <div>
        <InputToggle

          //Recebe todas as demais props
          {...inputProps}

          //Chama a função que seta os valores informados pelo usuário no seu respectivo input, função essa em (RegisterModal)
          onChange={onChange}

          //Chama a função ChangeToggleButton, localizada em RegisterModal
          onClick={ChangeToggleButton}

        />
        <span className="regSpanOption">Não</span>
        </div>
        /*
          Essa verificação ocorre para seja mostrado na tela, o mesmo como foi enviado.
            - Se foi enviado como "true", o botão tem que está ativo.
            - Se for enviado como "false", o botão tem que está desativado.
        */
      )}
    </Toggle>

  ) : (
    <InputGroup>
      
      {/* Exibindo o label correspondente para cada input */}
      <label htmlFor={id}>{label}</label>
      
      <input
        //Recebe todas as demais props
        {...inputProps} 
        
        //Chama a função que seta os valores informados pelo usuário no seu respectivo input, função essa em (RegisterModal)
        onChange={onChange} 

        //Chama a função handleFocus, localizado logo acima dessa página.
        onBlur={handleFocus} 

        /*
          Faz com que o campo de confirmação de senha, já informe o span assim que clicar.
          (Evita que esse span só seja exibido ao clicar em enviar)
        */ 
        onFocus={() =>
          inputProps.name === "registerConf_Password" && setFocused(true)
        }

        focused={focused.toString()}
      />
    
      <span>{errorMessage}</span>
    </InputGroup>
  );
};

export default FormInput;
