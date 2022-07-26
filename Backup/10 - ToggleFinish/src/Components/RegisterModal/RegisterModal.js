import React, { useState } from "react";
import "../../Styles/localStyles.scss";
import { CgClose } from "react-icons/cg";
import { ModalDiv, Input, Submit, Span } from "../../themes/LocalStyles";
import { ToggleButton } from "../ToggleButton/ToggleButton.js";

function RegisterModal({ setLoginForm, closeModal }) {
  const [toggleButtonOption, setToggleButtonOption] = useState(false);

  function ChangeToggleButton() {
    if (toggleButtonOption === true) {
      setToggleButtonOption(false);
    } else {
      setToggleButtonOption(true);
    }
  }
  return (
    <ModalDiv className="modal register_modal">
      <form>
        <div className="header_form">
          <h1 className="registerTitle">Cadastre-se</h1>
          <button className="close-modal-btn" onClick={closeModal}>
            <CgClose />
          </button>
        </div>

        <div className="registerScroll">
          <label htmlFor="registerfirstName">Nome</label>
          <Input
            className="input"
            type="text"
            name="registerfirstName"
            id="registerfirstName"
            placeholder="Informe o seu nome"
          />

          <label htmlFor="registerLastName">Sobrenome</label>
          <Input
            className="input"
            type="text"
            name="registerLastName"
            id="registerLastName"
            placeholder="Informe o seu sobrenome"
          />

          <label htmlFor="registerEmail">E-mail</label>
          <Input
            className="input"
            type="email"
            name="registerEmail"
            id="registerEmail"
            placeholder="Informe o seu e-mail"
          />

          <label htmlFor="registerCPF">CPF</label>
          <Input
            className="input"
            type="number"
            name="registerCPF"
            id="registerCPF"
            placeholder="Informe o seu CPF"
          />

          <label htmlFor="registerPhone">Telefone</label>
          <Input
            className="input"
            type="number"
            name="registerPhone"
            id="registerPhone"
            placeholder="Informe o seu CPF"
          />

          <label htmlFor="registerPassword">Senha</label>
          <Input
            className="input"
            type="password"
            name="registerPassword"
            id="registerPassword"
            placeholder="Informe a sua senha"
          />

          <label htmlFor="registerConf_Password">Confirmar Senha</label>
          <Input
            className="input"
            type="password"
            name="registerConf_Password"
            id="registerConf_Password"
            placeholder="Confirme a sua senha"
          />
        </div>

        <div className="toggleButton_div">
          <label htmlFor="toggleButton">Prestar serviço?</label>
          <div>
            <ToggleButton
              ChangeToggleButton={ChangeToggleButton}
              toggleButtonOption={toggleButtonOption}
            />
            {toggleButtonOption ? <Span>Sim</Span> : <Span>Não</Span>}
          </div>
        </div>

        {toggleButtonOption
          ? console.log(toggleButtonOption)
          : console.log(toggleButtonOption)}

        <div className="bottom_register_form">
          <Submit className="submit-btn">Cadastrar</Submit>
          <p>Já tem uma conta?</p>
          <button className="change-page-btn" onClick={setLoginForm}>
            Login
          </button>
        </div>
      </form>
    </ModalDiv>
  );
}

export default RegisterModal;
