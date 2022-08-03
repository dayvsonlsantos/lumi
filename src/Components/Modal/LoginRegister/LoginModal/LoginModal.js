import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import InputFieldLog from "./InputFieldLog/InputFieldLog";
import { Link } from "react-router-dom";
import {
  Container,
  FormTop,
  CloseButton,
  Submit,
  Esqueciasenha,
  ChangePage,
} from "../../Styles.Modal";

function LoginModal({ setRegisterForm, closeModalSign, openModalPass }) {
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
      type: "email",
      name: "loginEmail",
      placeholder: "Informe o seu e-mail",
      errorMessage: "Esse não é um endereço de e-mail válido!",
      label: "E-mail",
      required: true,
    },
    {
      id: "loginPassword",
      type: "password",
      name: "loginPassword",
      placeholder: "Informe a sua senha",
      label: "Senha",
      required: true,
      errorMessage: "Essa senha não corresponde aos padrões de cadastro.",
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

    <Container>
      <form onSubmit={handleSubmit}>
        <FormTop>
          <h1>Login</h1>
          <CloseButton onClick={closeModalSign}>
            <CgClose />
          </CloseButton>
        </FormTop>

        {inputs.map((input) => (
          <InputFieldLog
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <Esqueciasenha onClick={openModalPass}>Esqueci a senha</Esqueciasenha>
        
        <Link to="/perfil">
          <p>Clicar</p>
        </Link>

        <Submit>Login</Submit>
        <p>Ainda não tem uma conta?</p>
        
        <ChangePage onClick={setRegisterForm}>
          Cadastre-se
        </ChangePage>
      </form>
    </Container>
  );
}

export default LoginModal;
