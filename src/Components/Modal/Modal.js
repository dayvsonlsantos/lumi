import React, { useState } from "react";
import RegisterModal from "./RegisterModal/RegisterModal";
import LoginModal from "./LoginModal/LoginModal";

function Modal({ closeModalSign, inputValueColor, bgColorG, openModalPass }) {
  

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
    <div className="backdrop"> {/*localStyles.scss*/}
      {isLogin ? (
       
        <LoginModal
          setRegisterForm={setRegisterForm}
          closeModalSign={closeModalSign}
          openModalPass={openModalPass}

          /*Alterar cor do input e seu valor*/
          inputValueColor={inputValueColor}
          bgColorG={bgColorG}
        />
      ) : (
        <RegisterModal
          setLoginForm={setLoginForm}
          closeModalSign={closeModalSign}

          /*Alterar cor do input e seu valor*/
          inputValueColor={inputValueColor}
          bgColorG={bgColorG}
        />
      )}
    </div>
  );
}

export default Modal;

