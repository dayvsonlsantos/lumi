import "../../../Styles/localStyles.scss";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { ModalDiv, Submit } from "../../../themes/LocalStyles";
import InputFieldFP from "./InputFieldFP/InputFieldFP";

function ForgetPassword({ closeModalPass, inputColor, inputValueColor, setLoginForm }) {
  
    //Verificação dos campos do formulário:

        const [values, setValues] = useState({
            emailFP: "",
            cpfFP: "",
        });

    // -----------------------------------------------------------------------

    //Configurando os atributos de cada Input, a partir do seu id:

        const inputs = [
            {
            id: "emailFP",
            className: "input",
            type: "email",
            name: "emailFP",
            placeholder: "Informe o seu e-mail",
            errorMessage: "Esse não é um endereço de e-mail válido!",
            label: "E-mail",
            required: true,
            },
            {
            id: "cpfFP",
            className: "input",
            type: "text",
            name: "cpfFP",
            placeholder: "Informe o seu CPF",
            errorMessage:
                "O CPF deve conter 11 caracteres, sendo informado apenas os números",
            label: "CPF",
            pattern: "^[0-9]{11}$",
            required: true,
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
                <h1 className="h1_modalFP">Recuperar a senha</h1>
                <button className="close-modal-btn" onClick={closeModalPass}> 
                    <CgClose />
                </button>
                </div>
                <div>
                {inputs.map((input) => (
                    <InputFieldFP
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                    inputValueColor={inputValueColor}
                    inputColor={inputColor}
                    />
                ))}
                </div>
                <Submit className="submit-btn">Enviar</Submit>
            </form>
        </ModalDiv>
    </div>
  );
}

export default ForgetPassword;
