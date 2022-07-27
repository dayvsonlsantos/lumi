import "../../../Styles/localStyles.scss";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { ModalDiv, Submit } from "../../../themes/LocalStyles";
import InputFieldLog from "./InputFieldLog/InputFieldLog";

function LoginModal({
  setRegisterForm,
  closeModalSign,
  inputValueColor,
  inputColor,
  openModalPass,
}) {

  //Verificação dos campos do formulário:

      const [values, setValues] = useState({
        loginEmail: "",
        loginPassword: "",
      });

  // -----------------------------------------------------------------------

  //Configurando os atributos de cada Input, a partir do seu id:

      const inputs = [
        {
          id: "loginEmail",
          className: "input",
          type: "email",
          name: "loginEmail",
          placeholder: "Informe o seu e-mail",
          errorMessage: "Esse não é um endereço de e-mail válido!",
          label: "E-mail",
          required: true,
        },
        {
          id: "loginPassword",
          className: "input",
          type: "password",
          name: "loginPassword",
          placeholder: "Informe a sua senha",
          errorMessage:
            "A senha deve conter no mínimo 8-16 caracteres, número, letras maiúsculas e/ou minúsculas e caractere especial",
          label: "Senha",
          required: true,
          pattern:
            "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
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
    
    <ModalDiv className="modal"> 
      <form onSubmit={handleSubmit}>
        <div className="header_form"> 
          <h1>Login</h1>
          <button className="close-modal-btn" onClick={closeModalSign}> 
            <CgClose />
          </button>
        </div>
        <div>
          {inputs.map((input) => (
            <InputFieldLog
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              inputValueColor={inputValueColor}
              inputColor={inputColor}
            />
          ))}
        </div>
        <button className="esqueciasenha" onClick={openModalPass} >
        Esqueci a senha
        </button>
        <Submit className="submit-btn">Login</Submit>
        <p>Ainda não tem uma conta?</p>
        <button className="change-page-btn" onClick={setRegisterForm}>
          Cadastre-se
        </button>
      </form>
    </ModalDiv>
  );
}

export default LoginModal;
