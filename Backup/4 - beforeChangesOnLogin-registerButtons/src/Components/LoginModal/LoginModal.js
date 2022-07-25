import React from "react";
import { Link } from "react-router-dom";

function LoginModal() {
  return (
    <div className="modal">
      <form>
        <h1>Login</h1>

        <label htmlFor="loginEmail">E-mail</label>
        <input
          type="email"
          name="loginEmail"
          id="loginEmail"
          placeholder="Informe o seu e-mail"
        />

        <label htmlFor="loginPassword">Senha</label>
        <input
          type="password"
          name="loginPassword"
          id="loginPassword"
          placeholder="Informe a sua senha"
        />
        <Link className="esqueciasenha" to="#">
          Esqueci a senha
        </Link>
        <button>Login</button>
        <p>Ainda não tem uma conta?</p>
        <Link to="#">Cadastre-se</Link>
      </form>
    </div>
  );
}

export default LoginModal;
