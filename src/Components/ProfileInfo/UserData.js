import React from "react";
import styles from "./UserData.module.css";
import {ProfileInput, Label, Span, UserDiv, LabelToggle, RadioButton} from "./ProfileDesign";

const userFirstName = "João";
const userLastName = "Medeiros da Silva";
const userEmail = "joaomedeirossilva@gmail.com";
const userPassword = "Etf#226994";
const userCPF = "12345678945";
const userDTNasc = "2001-10-12";
const userPhone = "81984527891";
const userToggleOption = "true";


export const UserData = () => {
    return (
        <form>
            <aside className={styles.profileAsideL}>
                <div className={styles.row}>
                    <UserDiv className={styles.userFirstName}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userFirstName">Nome</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userFirstName" id="userFirstName" value={userFirstName}/>
                    </UserDiv>
                    <UserDiv className={styles.userLastName}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userLastName">Sobrenome</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userLastName" id="userLastName" value={userLastName}/>
                    </UserDiv>
                </div>
                <div className={styles.row}>
                    <UserDiv className={styles.userEmail}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userEmail">Email</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="email" name="userEmail" id="userEmail" value={userEmail}/>
                    </UserDiv>
                    <UserDiv className={styles.userPassword}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userPassword">Senha</Label>
                            <Span>Mudar</Span>
                        </div>  
                        <ProfileInput className={styles.userInput} type="password" name="userPassword" id="userPassword" value={userPassword}/>
                    </UserDiv>
                </div>
                <div className={styles.row}>
                    <UserDiv className={styles.userCPF}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userCPF">CPF</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userCPF" id="userCPF" value={userCPF}/>
                    </UserDiv>
                    <UserDiv className={styles.userDTNasc}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userDTNasc">Data de Nascimento</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="date" name="userDTNasc" id="userDTNasc" value={userDTNasc}/>
                    </UserDiv>
                </div>
            </aside>
            <aside className={styles.profileAsideM}>
                <div className={styles.row}>
                    <UserDiv className={styles.userPhone}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userPhone">Telefone</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userPhone" id="userPhone" value={userPhone}/>
                        
                    </UserDiv>
                </div>
                <div className={styles.row}>
                    <UserDiv className={styles.userToggle}>
                        <Label htmlFor="toggleButton">Prestar serviço?</Label>

                        {userToggleOption==="true" ? (
                            <div className={styles.userToggleOption}>
                                <LabelToggle>
                                    <RadioButton value="Sim" defaultChecked />
                                    Sim
                                </LabelToggle>
                                <LabelToggle>
                                    <RadioButton value="Não" />
                                    Não
                                </LabelToggle>
                            </div>
                            
                            
                        ) : (
                            <div className={styles.userToggleOption}>
                                <LabelToggle>
                                    <input type="radio" id="userToggle" name="userToggle" value="Sim" />
                                    Sim
                                </LabelToggle>
                                <LabelToggle>
                                    <input type="radio" id="userToggle" name="userToggle" value="Não" defaultChecked />
                                    Não
                                </LabelToggle>
                            </div>
                        )}
                    </UserDiv>
                </div>
            </aside>
            <aside className={styles.profileAsideR}>
                <div className={styles.row}>
                    <h2 className={styles.user_h2}>Endereços</h2>
                </div>
                <div className={styles.row}>
                    <UserDiv className={styles.userFirstName}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userFirstName">Nome</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userFirstName" id="userFirstName" value={userFirstName}/>
                    </UserDiv>
                    <UserDiv className={styles.userLastName}>
                        <div className={styles.labelSVG}>
                            <Label htmlFor="userLastName">Sobrenome</Label>
                        </div>  
                        <ProfileInput className={styles.userInput} type="text" name="userLastName" id="userLastName" value={userLastName}/>
                    </UserDiv>
                </div>
                <div className={styles.row}></div>
                <div className={styles.row}></div>
            </aside>
        </form>
    )
}
