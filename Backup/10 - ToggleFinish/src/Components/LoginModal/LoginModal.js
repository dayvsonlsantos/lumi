import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/localStyles.scss";
import { CgClose } from "react-icons/cg";
import { ModalDiv } from "../../themes/LocalStyles";
import { Input } from "../../themes/LocalStyles";
import { Submit } from "../../themes/LocalStyles";

function LoginModal({ setRegisterForm, closeModal }) {
  return (
    <ModalDiv className="modal">
      <form>
        <div className="header_form">
          <h1>Login</h1>
          <button className="close-modal-btn" onClick={closeModal}>
            <CgClose />
          </button>
        </div>

        <label htmlFor="loginEmail">E-mail</label>
        <Input
          className="input"
          type="email"
          name="loginEmail"
          id="loginEmail"
          placeholder="Informe o seu e-mail"
        />

        <label htmlFor="loginPassword">Senha</label>
        <Input
          className="input"
          type="password"
          name="loginPassword"
          id="loginPassword"
          placeholder="Informe a sua senha"
        />
        <Link className="esqueciasenha" to="#">
          Esqueci a senha
        </Link>
        <Submit className="submit-btn">Login</Submit>
        <p>Ainda não tem uma conta?</p>
        <button className="change-page-btn" onClick={setRegisterForm}>
          Cadastre-se
        </button>
      </form>
    </ModalDiv>
  );
}

export default LoginModal;
