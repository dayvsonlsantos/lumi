import React, { useState } from "react";

import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";

function Modal({ closeModal, background_Modal }) {
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
        <LoginModal
          setRegisterForm={setRegisterForm}
          closeModal={closeModal}
          background_Modal={background_Modal}
        />
      ) : (
        <RegisterModal
          setLoginForm={setLoginForm}
          closeModal={closeModal}
          background_Modal={background_Modal}
        />
      )}
    </div>
  );
}

export default Modal;
