import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../Styles/localStyles.scss";
import { CgClose } from "react-icons/cg";
import { ModalDiv } from "../../themes/LocalStyles";
import { Submit } from "../../themes/LocalStyles";
import FormLoginInput from "./FormLoginInput/FormLoginInput";

function LoginModal({
  setRegisterForm,
  closeModal,
  inputValueColor,
  inputColor,
}) {
  const [values, setValues] = useState({
    loginEmail: "",
    loginPassword: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <ModalDiv className="modal">
      <form onSubmit={handleSubmit}>
        <div className="header_form">
          <h1>Login</h1>
          <button className="close-modal-btn" onClick={closeModal}>
            <CgClose />
          </button>
        </div>

        <div className="loginFields">
          {inputs.map((input) => (
            <FormLoginInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              inputValueColor={inputValueColor}
              inputColor={inputColor}
            />
          ))}
        </div>

        <Link className="esqueciasenha" to="#">
          Esqueci a senha
        </Link>
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
