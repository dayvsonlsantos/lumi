import React, { useState } from "react";

//Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Componentes
import RegisterModal from "./RegisterModal/RegisterModal";
import LoginModal from "./LoginModal/LoginModal";

//Style
import { Backdrop } from "../Styles.Modal";


function LoginRegister({ closeModalSign, openModalPass, setIsUserLogado }) {
  

  //Toastify
  const notify = (texto) =>
    toast(texto, { toastId: "toastFromRG" });

  //Modais Login e Register(Cadastro)
  const [isLogin, setIsLogin] = useState(true);

  function setLoginForm(texto) {
    setIsLogin(true);
    if(texto !== ""){
      <>{notify(texto)}</>;
    }
  }
    
  function setRegisterForm() {setIsLogin(false)}

  return (
    <Backdrop>  
      {isLogin ? (
        <LoginModal
          setRegisterForm={setRegisterForm}
          closeModalSign={closeModalSign}
          openModalPass={openModalPass}
          setIsUserLogado={setIsUserLogado}
        />
      ) : (
        <RegisterModal
          setLoginForm={setLoginForm}
          closeModalSign={closeModalSign}
        />
      )}
    </Backdrop>
  )
}

export default LoginRegister;

