import React from "react";
import { useState } from "react";

//CSS
import styles from "./CardUser.module.css";

//Componentes
import {
  Form,
  LeftColumn,
  MiddleColumn,
  RightColumn,
  Row,
  ProfileInput,
  Label,
  Span,
  LabelToggle,
  Submit,
} from "./Style.CardUser";
import ChangePassword from "./ChangePassword/ChangePassword";


//Dados
const userFirstName = "João";
const userLastName = "Medeiros da Silva";
const userEmail = "joaomedeirossilva@gmail.com";
const userPassword = "Etf#226994";
const userCPF = "12345678945";
const userDTNasc = "2001-10-12";
const userPhone = "81984527891";
const userToggleOption = "true";
const userCEP = "50610-246";
const userStreet = "Rua Mandacaru";
const userHouseNumber = "248";
const userBairro = "Casa Amarela";
const userCity = "Recife";
const userState = "PE";

export const CardUser = () => {
  //Abertura e fechamento da mudançade senha

  const [isModalChangePass, setModalChangePass] = useState(false); //Estado inicial do modal, false, pois inicia-se fechado

  //Função para abertura e fechamento do modal Mudar Senha, Função enviada para o componente navbar
  function openModalCP() {
    setModalChangePass(true);
  }

  //Função enviada para o componente modal
  function closeModalCP() {
    setModalChangePass(false);
  }

  return (
    <Form>
      {isModalChangePass ? (
        <ChangePassword closeModalCP={closeModalCP} />
      ) : null}

      <LeftColumn>
        <Row>
          <div className={styles.userFirstName}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userFirstName">Nome</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userFirstName"
              id="userFirstName"
              value={userFirstName}
              readOnly
            />
          </div>
          <div className={styles.userLastName}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userLastName">Sobrenome</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userLastName"
              id="userLastName"
              value={userLastName}
              readOnly
            />
          </div>
        </Row>
        <Row>
          <div className={styles.userEmail}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userEmail">Email</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="email"
              name="userEmail"
              id="userEmail"
              value={userEmail}
              readOnly
            />
          </div>
          <div className={styles.userPassword}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userPassword">Senha</Label>
              <Span onClick={openModalCP}>Mudar</Span>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="password"
              name="userPassword"
              id="userPassword"
              value={userPassword}
              readOnly
            />
          </div>
        </Row>
        <Row>
          <div className={styles.userCPF}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userCPF">CPF</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userCPF"
              id="userCPF"
              value={userCPF}
              readOnly
            />
          </div>
          <div className={styles.userDTNasc}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userDTNasc">Data de Nascimento</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="date"
              name="userDTNasc"
              id="userDTNasc"
              value={userDTNasc}
              readOnly
            />
          </div>
        </Row>
      </LeftColumn>
      <MiddleColumn>
        <Row>
          <div className={styles.userPhone}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userPhone">Telefone</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userPhone"
              id="userPhone"
              value={userPhone}
              readOnly
            />
          </div>
        </Row>
        <Row>
          <div className={styles.userServ}>
            <Label htmlFor="userOption">Prestar serviço?</Label>
            {userToggleOption === "true" ? (
              <LabelToggle>Sim</LabelToggle>
            ) : (
              <LabelToggle>Não</LabelToggle>
            )}
          </div>
        </Row>
        <Row>
          <Submit>Editar</Submit>
        </Row>
      </MiddleColumn>
      <RightColumn>
        <Row>
          <div className={styles.userCEP}>
            <div className={styles.labelSVG}>
              <Label htmlFor="useruserCEP">Código Postal</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userCEP"
              id="userCEP"
              value={userCEP}
              readOnly
            />
          </div>
          <div className={styles.userStreet}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userStreet">Rua</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userStreet"
              id="userStreet"
              value={userStreet}
              readOnly
            />
          </div>
        </Row>
        <Row>
          <div className={styles.userHouseNumber}>
            <div className={styles.labelSVG}>
              <Label htmlFor="useruserCEP">Número</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userHouseNumber"
              id="userHouseNumber"
              value={userHouseNumber}
              readOnly
            />
          </div>
          <div className={styles.userBairro}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userBairro">Bairro</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userBairro"
              id="userBairro"
              value={userBairro}
              readOnly
            />
          </div>
        </Row>
        <Row>
          <div className={styles.userCity}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userCity">Cidade</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userCity"
              id="userCity"
              value={userCity}
              readOnly
            />
          </div>
          <div className={styles.userState}>
            <div className={styles.labelSVG}>
              <Label htmlFor="userState">Estado</Label>
            </div>
            <ProfileInput
              className={styles.userInput}
              type="text"
              name="userState"
              id="userState"
              value={userState}
              readOnly
            />
          </div>
        </Row>
      </RightColumn>
    </Form>
  );
};
