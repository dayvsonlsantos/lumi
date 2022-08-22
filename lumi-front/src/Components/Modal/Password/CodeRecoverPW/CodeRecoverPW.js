import React, { useState } from "react";

//Botão Fechar
import { CgClose } from "react-icons/cg";

//Componentes
import {
  Backdrop,
  Container,
  FormTop,
  CloseButton,
  Submit,
} from "../../Styles.Modal";
import InputFieldCode from "./InputFieldCode/InputFieldCode";

function CodeRecoverPW({
  closeModalCode,
  openModalRecover,
}) {

  const [values, setValues] = useState({userCode: ""});

  const inputs = [
    {
      id: "userCode",
      type: "text",
      name: "userCode",
      placeholder: "Informe o código enviado em seu e-mail",
      label: "Código",
      required: true,
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
      <Container className="codeRecover">
        <form onSubmit={sendData}>
          
          <FormTop>
            <h1 className="codePassH1">Recuperar a senha</h1>
            <CloseButton onClick={closeModalCode}>
              <CgClose />
            </CloseButton>
          </FormTop>

          {inputs.map((input) => (
            <InputFieldCode
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={changeInputValue}
            />
          ))}

          <p onClick={openModalRecover}>Clicar</p>
          
          <Submit>Enviar</Submit>

        </form>
      </Container>
    </Backdrop>
  );
}

export default CodeRecoverPW;
