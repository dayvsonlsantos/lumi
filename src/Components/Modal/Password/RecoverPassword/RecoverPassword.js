import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { Backdrop, Container, FormTop, CloseButton, Submit } from "../../Styles.Modal";
import InputFieldRP from "./InputFieldRP/InputFieldRP";

function RecoverPassword({ closeModalRecover }) {
  //Verificação dos campos do formulário:

  const [values, setValues] = useState({
    passwordRecover: "",
    confirmPasswordRecover: "",
  });

  // -----------------------------------------------------------------------

  //Configurando os atributos de cada Input, a partir do seu id:

  const inputs = [
    {
      id: "passwordRecover",
      type: "password",
      name: "passwordRecover",
      placeholder: "Informe uma nova senha",
      errorMessage:
        "A senha deve conter no mínimo 8-16 caracteres, número, letras maiúsculas e/ou minúsculas e caractere especial",
      label: "Nova senha",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
    },
    {
      id: "confirmPasswordRecover",
      type: "password",
      name: "confirmPasswordRecover",
      placeholder: "Confirme a nova sua senha",
      errorMessage: "As senhas não são iguais!",
      label: "Confirmar nova senha",
      required: true,
      pattern: values.passwordRecover,
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
    <Backdrop>
      <Container>
        <form onSubmit={handleSubmit}>
          <FormTop>
            <h1>Criar nova senha</h1>
            <CloseButton onClick={closeModalRecover}>
              <CgClose />
            </CloseButton>
          </FormTop>

          {inputs.map((input) => (
            <InputFieldRP
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <Submit>Enviar</Submit>
        </form>
      </Container>
    </Backdrop>
  );
}

export default RecoverPassword;
