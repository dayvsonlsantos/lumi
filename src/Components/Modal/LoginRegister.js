import React, { useState } from "react";
import RegisterModal from "./RegisterModal/RegisterModal";
import LoginModal from "./LoginModal/LoginModal";
import { Backdrop } from "./Styles.Modal";

function LoginRegister({ closeModalSign, openModalPass }) {
  

  //Abertura e fechamento entre os modals: RegisterModal e LoginModal

    const [isLogin, setIsLogin] = useState(true);

    function setLoginForm() {
      setIsLogin(true);
    }
    
    function setRegisterForm() {
      setIsLogin(false);
    }

    
    

  // --------------------------------------------------------------------


  return (
    <Backdrop>
      {isLogin ? (
       
        <LoginModal
          setRegisterForm={setRegisterForm}
          closeModalSign={closeModalSign}
          openModalPass={openModalPass}

        />
      ) : (
        <RegisterModal
          setLoginForm={setLoginForm}
          closeModalSign={closeModalSign}

        />
      )}
    </Backdrop>
  );
}

export default LoginRegister;

