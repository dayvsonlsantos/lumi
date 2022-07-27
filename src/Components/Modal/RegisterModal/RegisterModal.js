import React, { useState } from "react";
import "../../../Styles/localStyles.scss";
import { CgClose } from "react-icons/cg";
import { ModalDiv, Submit } from "../../../themes/LocalStyles";
import InputFieldReg from "./InputFieldReg/InputFieldReg";

function RegisterModal({
  setLoginForm,
  closeModalSign,
  inputValueColor,
  inputColor,
}) {

  /*
    setLoginForm: Permite alterar p/ o modal de Login;
    closeModal: Fechar o modal;
    inputValueColor: Alterar a cor do valor do input de acordo com o modo (light, dark);
    inputColor: Alterar a cor do input de acordo com o modo (light, dark);
  */

  
  //Toggle para verificação se o usuário será um prestador de serviço

    const [toggleButtonOption, setToggleButtonOption] = useState("false");

    function ChangeToggleButton(e) {
      if (toggleButtonOption === "true") {
        setToggleButtonOption("false");
        setValues({
          ...values,
          [e.target.toggleButton]: (e.target.value = "false"),
        });
      } else {
        setToggleButtonOption("true");
        setValues({
          ...values,
          [e.target.toggleButton]: (e.target.value = "true"),
        });
      }
    }
  
  // -----------------------------------------------------------------------

  
  //Verificação dos campos do formulário:

    const [values, setValues] = useState({
      registerfirstName: "",
      registerLastName: "",
      registerEmail: "",
      registerCPF: "",
      registerPhone: "",
      registerPassword: "",
      registerConf_Password: "",
      toggleButton: toggleButtonOption,
    });
  
  // -----------------------------------------------------------------------


  //Configurando os atributos de cada Input, a partir do seu id:

    const inputs = [
      { //registerfirstName
        id: "registerfirstName",
        className: "input",
        type: "text",
        name: "registerfirstName",
        placeholder: "Informe o seu nome",
        errorMessage:
          "Nome deve possuir 3-16 caracteres e não pode conter caracteres especiais.",
        label: "Nome",
        required: true,
        pattern: "^[A-Za-z]{3,16}$",
      },
      { //registerLastName
        id: "registerLastName",
        className: "input",
        type: "text",
        name: "registerLastName",
        placeholder: "Informe o seu sobrenome",
        errorMessage:
          "Sobrenome deve possuir 3-45 caracteres e não pode conter caracteres especiais.",
        label: "Sobrenome",
        required: true,
        pattern: "^[A-Za-z]{3,16}$",
      },
      { //registerEmail
        id: "registerEmail",
        className: "input",
        type: "email",
        name: "registerEmail",
        placeholder: "Informe o seu e-mail",
        errorMessage: "Esse não é um endereço de e-mail válido!",
        label: "E-mail",
        required: true,
      },
      { //registerCPF
        id: "registerCPF",
        className: "input",
        type: "text",
        name: "registerCPF",
        placeholder: "Informe o seu CPF",
        errorMessage:
          "O CPF deve conter 11 caracteres, sendo informado apenas os números",
        label: "CPF",
        pattern: "^[0-9]{11}$",
        required: true,
      },
      { //registerPhone
        id: "registerPhone",
        className: "input",
        type: "text",
        name: "registerPhone",
        placeholder: "Informe o seu telefone",
        errorMessage:
          "O telefone deve conter 11 caracteres, sendo informado apenas os números",
        label: "Telefone",
        required: true,
        pattern: "^[0-9]{11}$",
      },
      { //registerPassword
        id: "registerPassword",
        className: "input",
        type: "password",
        name: "registerPassword",
        placeholder: "Informe a sua senha",
        errorMessage:
          "A senha deve conter no mínimo 8-16 caracteres, número, letras maiúsculas e/ou minúsculas e caractere especial",
        label: "Senha",
        required: true,
        pattern:
          "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
      },
      { //registerConf_Password
        id: "registerConf_Password",
        className: "input",
        type: "password",
        name: "registerConf_Password",
        placeholder: "Confirme a sua senha",
        errorMessage: "As senhas não são iguais!",
        label: "Confirmar senha",
        required: true,
        pattern: values.registerPassword,
      },
      { //toggleButton
        id: "toggleButton",
        className: "toggle-input",
        name: "toggleButton",
        type: "checkbox",
        label: "Prestar serviço ?",
      },
    ];

  // -----------------------------------------------------------------------



  // Função chamada ao Submit do formulário:

    const handleSubmit = (e) => {
      e.preventDefault(); //Impedindo recarregamento da página ao clicar no botão;
      console.log(values); //Imprimindo valores no console ao enviar os dados;
    };

  // -----------------------------------------------------------------------



  // Função para setar os valores informados pelo usuário no seu respectivo input:
    
    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    };
  
  // -----------------------------------------------------------------------


  return (

    /* CSS da página: localStyles.css */

    <ModalDiv className="modal register_modal">
      <form onSubmit={handleSubmit}>
        <div className="header_form">
          <h1 className="registerTitle">Cadastre-se</h1>
          <button className="close-modal-btn" onClick={closeModalSign}>
            <CgClose />
          </button>
        </div>

        <div className="registerScroll">
          {inputs.map((input) => (
            <InputFieldReg
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              ChangeToggleButton={ChangeToggleButton}
              toggleButtonOption={toggleButtonOption}
              inputValueColor={inputValueColor}
              inputColor={inputColor}
            />
          ))}
        </div>

        <div className="bottom_register_form">
          <Submit className="submit-btn">Cadastrar</Submit>
          <p>Já tem uma conta?</p>
          <button className="change-page-btn" onClick={setLoginForm}>
            Login
          </button>
        </div>
      </form>
    </ModalDiv>
  );
}

export default RegisterModal;