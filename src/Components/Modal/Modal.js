import React, { useState } from "react";

import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

function Modal({ closeModal, inputValueColor, inputColor }) {
  const [isLogin, setIsLogin] = useState(true);

  function setLoginForm() {
    setIsLogin(true);
  }
  function setRegisterForm() {
    setIsLogin(false);
  }

  return (
    <div className="backdrop">
      {isLogin ? (
        <LoginModal setRegisterForm={setRegisterForm} closeModal={closeModal} />
      ) : (
        <RegisterModal setLoginForm={setLoginForm} closeModal={closeModal} inputValueColor={inputValueColor} inputColor={inputColor} />
      )}
    </div>
  );
}

export default Modal;
