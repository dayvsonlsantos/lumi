import React from "react";
import { Link } from "react-router-dom";

function RegisterModal({setLoginForm, closeModal}) {
  return (
    <div className="modal">
      <form>
        <h1>Cadastrar</h1>
        <button className="close-modal-btn" onClick={closeModal}>Fechar</button>

        <label htmlFor="firstName">Nome</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Informe o seu nome"
        />

        <label htmlFor="lastName">Sobrenome</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Informe o seu sobrenome"
        />

        <label htmlFor="registerEmail">E-mail</label>
        <input
          type="email"
          name="registerEmail"
          id="registerEmail"
          placeholder="Informe o seu e-mail"
        />

        <label htmlFor="registerCPF">CPF</label>
        <input
          type="number"
          name="registerCPF"
          id="registerCPF"
          placeholder="Informe o seu CPF"
        />

        <label htmlFor="registerPhone">Telefone</label>
        <input
          type="number"
          name="registerPhone"
          id="registerPhone"
          placeholder="Informe o seu CPF"
        />

        <label htmlFor="registerPassword">Senha</label>
        <input
          type="password"
          name="registerPassword"
          id="registerPassword"
          placeholder="Informe a sua senha"
        />

        <label htmlFor="registerConf_Password">Confirmar Senha</label>
        <input
          type="password"
          name="registerConf_Password"
          id="registerConf_Password"
          placeholder="Confirme a sua senha"
        />

        <button className="submit-btn">Cadastrar</button>
        <p>Já tem uma conta?</p>
        <button className="change-page-btn" onClick={setLoginForm}>Login</button>
      </form>
    </div>
  );
}

export default RegisterModal;
