import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

const ModalDiv = styled.div`
  background-color: ${({ theme }) => theme.background_modal};
  max-width: 50vw;
  min-height: 50vh;
  width: 100%;
  border-radius: 12px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  margin: 1rem 0;
  border: none;
  border-radius: 12px;
  padding: 0.8rem;
  font-size: 0.9em;
  background: ${({ theme }) => theme.view_background};
  color: ${({ theme }) => theme.view_text};
`;

const Submit = styled.button`
  margin-bottom: 2rem;
  width: 8rem;
  border-radius: 12px;
  border: none;
  background-color: ${({ theme }) => theme.purple_variant};
  color: #e8f1f2;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 0.15rem;
  cursor: pointer;
  display: flex;
  align-self: center;
  justify-content: center;
`;

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
