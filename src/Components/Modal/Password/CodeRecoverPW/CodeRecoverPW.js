import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
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
  //Verificação dos campos do formulário:

  const [values, setValues] = useState({
    codeRecover: "",
  });

  // -----------------------------------------------------------------------

  //Configurando os atributos de cada Input, a partir do seu id:

  const inputs = [
    {
      id: "codeRecover",
      type: "text",
      name: "codeRecover",
      placeholder: "Informe o código enviado em seu e-mail",
      label: "Código",
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
  
    <Backdrop>
      <Container>
        <form onSubmit={handleSubmit}>
          <FormTop>
            <h1>Recuperar a senha</h1>
            <CloseButton onClick={closeModalCode}>
              <CgClose />
            </CloseButton>
          </FormTop>

          {inputs.map((input) => (
            <InputFieldCode
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
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
