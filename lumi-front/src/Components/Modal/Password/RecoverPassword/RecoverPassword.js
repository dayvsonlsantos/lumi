import React, { useState } from "react";

//Botão Fechar
import { CgClose } from "react-icons/cg";

//Componentes
import { Backdrop, Container, FormTop, CloseButton, Submit } from "../../Styles.Modal";
import InputFieldRP from "./InputFieldRP/InputFieldRP";

function RecoverPassword({ closeModalRecover }) {

  const [values, setValues] = useState({
    userPassword: "",
    userConfPassword: "",
  });

  const inputs = [
    {
      id: "userPassword",
      type: "password",
      name: "userPassword",
      placeholder: "Informe uma nova senha",
      errorMessage:
        "A senha deve conter no mínimo 8-16 caracteres, número, letras maiúsculas e/ou minúsculas e caractere especial",
      label: "Nova senha",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
    },
    {
      id: "userConfPassword",
      type: "password",
      name: "userConfPassword",
      placeholder: "Confirme a nova sua senha",
      errorMessage: "As senhas não são iguais!",
      label: "Confirmar nova senha",
      required: true,
      pattern: values.userPassword,
    },
  ];


  const sendData = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const changeInputValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (

    <Backdrop>
      <Container className="recoverPassword">
        <form onSubmit={sendData}>
          <FormTop>
            <h1 className="recoverPassH1">Criar nova senha</h1>
            <CloseButton onClick={closeModalRecover}>
              <CgClose />
            </CloseButton>
          </FormTop>

          {inputs.map((input) => (
            <InputFieldRP
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={changeInputValue}
            />
          ))}

          <Submit>Enviar</Submit>
        </form>
      </Container>
    </Backdrop>
  );
}

export default RecoverPassword;
