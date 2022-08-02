import "../../../Styles/localStyles.scss";

import React, { useState } from "react";

//Icones
import { CgClose } from "react-icons/cg";


import { ModalDiv, Submit } from "../../../themes/LocalStyles";

import InputFieldCP from "./InputFieldCP/InputFieldCP";

function ChangePassword({ closeModalCP }) {
  
    //Verificação dos campos do formulário:

        const [values, setValues] = useState({
            passwordOld: "",
            passwordChange: "",
            confirmPasswordChange: "",
        });

    // -----------------------------------------------------------------------

    //Configurando os atributos de cada Input, a partir do seu id:

        const inputs = [
            {
                id: "passwordOld",
                className: "input",
                type: "password",
                name: "passwordOld",
                placeholder: "Informe sua senha antiga",
                errorMessage:
                  "A senha deve conter no mínimo 8-16 caracteres, número, letras maiúsculas e/ou minúsculas e caractere especial",
                label: "Senha Antiga",
                required: true,
                pattern:
                  "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
              },
            {
                id: "passwordChange",
                className: "input",
                type: "password",
                name: "passwordChange",
                placeholder: "Informe uma nova senha",
                errorMessage:
                  "A senha deve conter no mínimo 8-16 caracteres, número, letras maiúsculas e/ou minúsculas e caractere especial",
                label: "Nova senha",
                required: true,
                pattern:
                  "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
              },
            {
                id: "confirmPasswordChange",
                className: "input",
                type: "password",
                name: "confirmPasswordChange",
                placeholder: "Confirme a nova sua senha",
                errorMessage: "As senhas não são iguais!",
                label: "Confirmar nova senha",
                required: true,
                pattern: values.passwordChange,
              },
        ];
    // -----------------------------------------------------------------------

    // Função chamada ao Submit do formulário:
      
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(values);        
        };

    // -----------------------------------------------------------------------


    // Função para setar os valores informados pelo usuário no seu respectivo input:

        const onChange = (e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
        };

    // -----------------------------------------------------------------------

  return (
    
      
      /* Css da página: localStyles.scss */
    <div className="backdrop">
        <ModalDiv className="modal"> 
            <form onSubmit={handleSubmit}>
                <div className="header_form"> 
                <h1 className="h1_modalFP">Mudar a senha</h1>
                <button className="close-modal-btn" onClick={closeModalCP}> 
                    <CgClose />
                </button>
                </div>
                <div className="recoverInput">
                {inputs.map((input) => (
                    <InputFieldCP
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                    />
                ))}
                </div>
                <Submit className="submit-btn">Enviar</Submit>
            </form>
        </ModalDiv>
    </div>
  );
}

export default ChangePassword;
