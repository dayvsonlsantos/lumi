import React, { useState } from "react";

//Axios
import { axiosInstance } from "../../../../service/axios";

//Botão Fechar
import { CgClose } from "react-icons/cg";

//Componentes
import InputFieldReg from "./InputFieldReg/InputFieldReg";
import {
  ContainerReg,
  FormTop,
  CloseButton,
  Submit,
  ChangePage,
  AceitarTermos,
} from "../../Styles.Modal";

//Validação do CPF
import CPF from "cpf-check";

//Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { calculaIdade } from "../../../Validate";

function RegisterModal({ setLoginForm, closeModalSign }) {
  const [values, setValues] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userCPF: "",
    userDTNasc: "",
    userPhone: "",
    userPassword: "",
    userConfPassword: "",
  });

  const inputs = [
    {
      //userFirstName
      id: "userFirstName",
      type: "text",
      name: "userFirstName",
      placeholder: "Informe o seu nome",
      errorMessage:
        "Nome deve possuir 3-16 caracteres e não pode conter caracteres especiais.",
      label: "Nome",
      required: true,
      pattern: "^[A-Za-z ]{3,16}$",
    },
    {
      //userLastName
      id: "userLastName",
      type: "text",
      name: "userLastName",
      placeholder: "Informe o seu sobrenome",
      errorMessage:
        "Sobrenome deve possuir 3-45 caracteres e não pode conter caracteres especiais.",
      label: "Sobrenome",
      required: true,
      pattern: "^[A-Za-z ]{3,45}$",
    },
    {
      //userEmail
      id: "userEmail",
      type: "email",
      name: "userEmail",
      placeholder: "Informe o seu e-mail",
      errorMessage: "Esse não é um endereço de e-mail válido!",
      label: "E-mail",
      required: true,
    },
    {
      //userCPF
      id: "userCPF",
      type: "text",
      name: "userCPF",
      placeholder: "Informe o seu CPF",
      errorMessage:
        "O CPF deve conter 11 caracteres, sendo informado apenas os números",
      label: "CPF",
      pattern: "^[0-9]{11}$",
      required: true,
    },
    {
      id: "userDTNasc",
      name: "userDTNasc",
      type: "date",
      errorMessage: "Informe sua data de nascimento",
      label: "Data de Nascimento",
      required: true,
      className: "dtNasc",
    },
    {
      //userPhone
      id: "userPhone",
      type: "text",
      name: "userPhone",
      placeholder: "Informe o seu telefone",
      errorMessage:
        "O telefone deve conter 11 caracteres, sendo informado apenas os números",
      label: "Telefone",
      required: true,
      pattern: "^[0-9]{11}$",
    },
    {
      //userPassword
      id: "userPassword",
      type: "password",
      name: "userPassword",
      placeholder: "Informe a sua senha",
      errorMessage:
        "A senha deve conter no mínimo 8-16 caracteres, número, letras maiúsculas e/ou minúsculas e caractere especial",
      label: "Senha",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
    },
    {
      //userConfPassword
      id: "userConfPassword",
      type: "password",
      name: "userConfPassword",
      placeholder: "Confirme a sua senha",
      errorMessage: "As senhas não são iguais!",
      label: "Confirmar senha",
      required: true,
      pattern: values.userPassword,
    },
  ];

  const notify = (texto) => toast(texto, { toastId: "toastFromRG" });

  async function sendData(e) {
    e.preventDefault();
    if (CPF.validate(values.userCPF) === false) {
      <>{notify("Esse CPF é inválido!")}</>;
    } else {
      if (calculaIdade(values.userDTNasc) < 18) {
        <>{notify("Você ainda é menor de idade")}</>;
      } else {
        axiosInstance.post("/api/user", values).then((res) => {
          if (res.status === 201) {
            setLoginForm("Cadastrado com sucesso");
          }
        });
      }
    }
  }

  const changeInputValue = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <ContainerReg>
      <form onSubmit={sendData}>
        <FormTop>
          <h1>Cadastre-se</h1>
          <CloseButton onClick={closeModalSign}>
            <CgClose />
          </CloseButton>
        </FormTop>

        <aside>
          {inputs.map((input) => (
            <InputFieldReg
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={changeInputValue}
            />
          ))}
        </aside>

        <AceitarTermos>
          <input
            type="checkbox"
            name="checkbox"
            value="Termos de Uso"
            className="checkbox"
            required
          />
          <label>
          Compreendo e aceito os <a href="/termos-de-uso">Termos de uso</a>

          </label>
        </AceitarTermos>

        <Submit>Cadastrar</Submit>
        <p>Já tem uma conta?</p>
        <ChangePage onClick={setLoginForm}>Login</ChangePage>
      </form>
    </ContainerReg>
  );
}

export default RegisterModal;
