import React, { useState } from "react";
import "../../Styles/localStyles.scss";
import { CgClose } from "react-icons/cg";
import { ModalDiv, Submit } from "../../themes/LocalStyles";
import FormInput from "../FormInput/FormInput";

function RegisterModal({ setLoginForm, closeModal, inputValueColor, inputColor }) {
  //Toggle para verificação se o usuário será um prestador de serviço

  const [toggleButtonOption, setToggleButtonOption] = useState(false);

  function ChangeToggleButton(e) {
    if (toggleButtonOption === true) {
      setToggleButtonOption(false);
      setValues({ ...values, [e.target.toggleButton]: e.target.value=false });
    } else {
      setToggleButtonOption(true);
      setValues({ ...values, [e.target.toggleButton]: e.target.value=true });
    }
  }

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

  const inputs = [
    {
      id: "registerfirstName",
      className: "input",
      type: "text",
      name: "registerfirstName",
      placeholder: "Informe o seu nome",
      errorMessage: "Nome deve possuir 3-16 caracteres e não pode conter caracteres especiais.",
      label: "Nome",
      required: true,
      pattern: "^[A-Za-z]{3,16}$",
    },
    {
      id: "registerLastName",
      className: "input",
      type: "text",
      name: "registerLastName",
      placeholder: "Informe o seu sobrenome",
      errorMessage: "Sobrenome deve possuir 3-45 caracteres e não pode conter caracteres especiais.",
      label: "Sobrenome",
      required: true,
      pattern: "^[A-Za-z]{3,16}$",
    },
    {
      id: "registerEmail",
      className: "input",
      type: "email",
      name: "registerEmail",
      placeholder: "Informe o seu e-mail",
      errorMessage: "Esse não é um endereço de e-mail válido!",
      label: "E-mail",
      required: true,
    },
    {
      id: "registerCPF",
      className: "input",
      type: "text",
      name: "registerCPF",
      placeholder: "Informe o seu CPF",
      errorMessage: "O CPF deve conter 11 caracteres, sendo informado apenas os números",
      label: "CPF",
      pattern: "^[0-9]{11}$",
      required: true,
    },
    {
      id: "registerPhone",
      className: "input",
      type: "text",
      name: "registerPhone",
      placeholder: "Informe o seu telefone",
      errorMessage: "O telefone deve conter 11 caracteres, sendo informado apenas os números",
      label: "Telefone",
      required: true,
      pattern: "^[0-9]{11}$",
    },
    {
      id: "registerPassword",
      className: "input",
      type: "password",
      name: "registerPassword",
      placeholder: "Informe a sua senha",
      errorMessage: "A senha deve conter no mínimo 8-16 caracteres, número, letras maiúsculas e/ou minúsculas e caractere especial",
      label: "Senha",
      required: true,
      pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
    },
    {
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
    {
      id: "toggleButton",
      className: "toggle-input",
      name: "toggleButton",
      type: "checkbox",
      label: "Prestar serviço ?",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <ModalDiv className="modal register_modal">
      <form onSubmit={handleSubmit}>
        <div className="header_form">
          <h1 className="registerTitle">Cadastre-se</h1>
          <button className="close-modal-btn" onClick={closeModal}>
            <CgClose />
          </button>
        </div>

        <div className="registerScroll">
          {inputs.map((input) => (
            <FormInput
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

        {console.log(toggleButtonOption)}

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
