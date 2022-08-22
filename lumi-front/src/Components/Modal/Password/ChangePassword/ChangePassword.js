import React, { useState } from "react";

//Botão Fechar
import { CgClose } from "react-icons/cg";

//Componentes
import InputFieldCP from "./InputFieldCP/InputFieldCP";
import {
  Backdrop,
  Container,
  FormTop,
  CloseButton,
  Submit,
} from "../../Styles.Modal";

//Axios
import { axiosInstance } from "../../../../service/axios";

//Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ChangePassword({ closeModalCP }) {
  const [mudarSenha, setmudarSenha] = useState({
    userOldPassword: "",
    userNewPassword: "",
    userConfNewPassword: "",
  });

  const inputs = [
    {
      id: "userOldPassword",
      className: "input",
      type: "password",
      name: "userOldPassword",
      placeholder: "Informe sua senha antiga",
      errorMessage:
        "A senha deve conter no mínimo 8-16 caracteres, número, letras maiúsculas e/ou minúsculas e caractere especial",
      label: "Senha Antiga",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
    },
    {
      id: "userNewPassword",
      className: "input",
      type: "password",
      name: "userNewPassword",
      placeholder: "Informe uma nova senha",
      errorMessage:
        "A senha deve conter no mínimo 8-16 caracteres, número, letras maiúsculas e/ou minúsculas e caractere especial",
      label: "Nova senha",
      required: true,
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$",
    },
    {
      id: "userConfNewPassword",
      className: "input",
      type: "password",
      name: "userConfNewPassword",
      placeholder: "Confirme a nova sua senha",
      errorMessage: "As senhas não são iguais!",
      label: "Confirmar nova senha",
      required: true,
      pattern: mudarSenha.userNewPassword,
    },
  ];


  //Toastify
  const notify = (texto) =>
    toast(texto, { toastId: "toastFromCP" });

  function sendData(e) {
    e.preventDefault();
    axiosInstance.post("/api/user/mudar-senhar", {
      userNewPassword: mudarSenha.userNewPassword,
      userOldPassword: mudarSenha.userOldPassword
    }).then((res) => {
      if(res.status === 202){
        <>{notify("Senha alterada com Sucesso")}</>;
      }
      //Senha incorreta
      if(res.status === 203) {
        <>{notify("Senha incorreta")}</>;
      }
    })
    
  };

  const changeInputValue = (e) => {
    setmudarSenha({ ...mudarSenha, [e.target.name]: e.target.value });
  };

  return (
    <Backdrop>
      <Container className="changePassword">
        <form onSubmit={sendData}>
          
          <FormTop className="organizarDiv">
            <h1 className="changePass">Mudar a senha</h1>
            <CloseButton onClick={closeModalCP}>
              <CgClose />
            </CloseButton>
          </FormTop>

          {inputs.map((input) => (
            <InputFieldCP
              key={input.id}
              {...input}
              value={mudarSenha[input.name]}
              onChange={changeInputValue}
            />
          ))}

          <Submit>Enviar</Submit>

        </form>
      </Container>
    </Backdrop>
  )
}

export default ChangePassword;
