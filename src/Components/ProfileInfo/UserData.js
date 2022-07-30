import React from "react";
import styles from "./UserData.module.css";
import {ProfileInput, Label, Span, UserDiv, LabelToggle, H2} from "./ProfileDesign";
import { Submit } from "../../themes/LocalStyles";
import { useState } from "react";
import ChangePassword from "../../Components/Modal/ChangePassword/ChangePassword";

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


export const UserData = () => {
    
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
        <form>
            {isModalChangePass ? <ChangePassword closeModalCP={closeModalCP}/> : null}

            <aside className={styles.profileAsideL}>
                <div className={styles.row}>
                    <UserDiv className={styles.userFirstName}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userFirstName">Nome</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userFirstName" id="userFirstName" value={userFirstName} readOnly/>
                    </UserDiv>
                    <UserDiv className={styles.userLastName}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userLastName">Sobrenome</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userLastName" id="userLastName" value={userLastName} readOnly/>
                    </UserDiv>
                </div>
                <div className={styles.row}>
                    <UserDiv className={styles.userEmail}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userEmail">Email</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="email" name="userEmail" id="userEmail" value={userEmail} readOnly/>
                    </UserDiv>
                    <UserDiv className={styles.userPassword}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userPassword">Senha</Label>
                            <Span onClick={openModalCP}>Mudar</Span>
                        </div>  
                        <ProfileInput className={styles.userInput} type="password" name="userPassword" id="userPassword" value={userPassword} readOnly/>
                    </UserDiv>
                </div>
                <div className={styles.row}>
                    <UserDiv className={styles.userCPF}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userCPF">CPF</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userCPF" id="userCPF" value={userCPF} readOnly/>
                    </UserDiv>
                    <UserDiv className={styles.userDTNasc}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userDTNasc">Data de Nascimento</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="date" name="userDTNasc" id="userDTNasc" value={userDTNasc} readOnly/>
                    </UserDiv>
                </div>
            </aside>
            <aside className={styles.profileAsideM}>
                <div className={styles.row}>
                    <UserDiv className={styles.userPhone}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userPhone">Telefone</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userPhone" id="userPhone" value={userPhone} readOnly/>
                        
                    </UserDiv>
                </div>
                <div className={styles.row}>
                    <UserDiv className={styles.userRadio}>
                        <Label htmlFor="userOption">Prestar serviço?</Label>
                        {userToggleOption==="true" ? (
                            <div className={styles.userRadioOption}>
                                <LabelToggle>
                                    Sim
                                </LabelToggle>
                            </div>
                            
                            
                        ) : (
                            <div className={styles.userToggleOption}>
                                <LabelToggle>
                                    Não
                                </LabelToggle>
                            </div>
                        )}
                    </UserDiv>
                </div>
                <div className={styles.row}>
                    <Submit>Editar</Submit>
                </div>
            </aside>
            <aside className={styles.profileAsideR}>
                <div className={styles.rowEnderecos}>
                    <H2 className={styles.user_h2}>Endereços</H2>
                </div>
                <div className={styles.row}>
                    <UserDiv className={styles.userCEP}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="useruserCEP">Código Postal</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userCEP" id="userCEP" value={userCEP} readOnly/>
                    </UserDiv>
                    <UserDiv className={styles.userStreet}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userStreet">Rua</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userStreet" id="userStreet" value={userStreet} readOnly/>
                    </UserDiv>
                </div>
                <div className={styles.row}>
                    <UserDiv className={styles.userHouseNumber}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="useruserCEP">Número</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userHouseNumber" id="userHouseNumber" value={userHouseNumber} readOnly/>
                    </UserDiv>
                    <UserDiv className={styles.userBairro}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userBairro">Bairro</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userBairro" id="userBairro" value={userBairro} readOnly/>
                    </UserDiv>
                </div>
                <div className={styles.row}>
                    <UserDiv className={styles.userCity}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userCity">Cidade</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userCity" id="userCity" value={userCity} readOnly/>
                    </UserDiv>
                    <UserDiv className={styles.userState}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userState">Estado</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userState" id="userState" value={userState} readOnly/>
                    </UserDiv>
                </div>
            </aside>
            
        </form>
    )
}
