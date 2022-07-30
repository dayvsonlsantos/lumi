import "../../../Styles/localStyles.scss";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { ModalDiv, Submit } from "../../../themes/LocalStyles";
import InputFieldCode from "./InputFieldCode/InputFieldCode";

function CodeRecoverPW({ closeModalCode, bgColorG, inputValueColor, openModalRecover }) {
  
    //Verificação dos campos do formulário:

        const [values, setValues] = useState({
            codeRecover: "",
        });

    // -----------------------------------------------------------------------

    //Configurando os atributos de cada Input, a partir do seu id:

        const inputs = [
            {
            id: "codeRecover",
            className: "input",
            type: "text",
            name: "codeRecover",
            placeholder: "Informe o código enviado em seu e-mail",
            label: "Código",
            required: true,
            },
        ];
    // -----------------------------------------------------------------------

    // Função chamada ao Submit do formulário:
      
        const handleSubmit = (e) => {
            e.preventDefault();
            console.log(values);
        };

    // -----------------------------------------------------------------------


    // Função para setar os valores informados pelo usuário no seu respectivo input:

        const onChange = (e) => {
            setValues({ ...values, [e.target.name]: e.target.value });
        };

    // -----------------------------------------------------------------------

  return (
    
      
      /* Css da página: localStyles.scss */
    <div className="backdrop">
        <ModalDiv className="modal"> 
            <form onSubmit={handleSubmit}>
                <div className="header_form"> 
                <h1 className="h1_modalFP">Recuperar a senha</h1>
                <button className="close-modal-btn" onClick={closeModalCode}> 
                    <CgClose />
                </button>
                </div>
                <div className="codeInput">
                {inputs.map((input) => (
                    <InputFieldCode
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                    inputValueColor={inputValueColor}
                    bgColorG={bgColorG}
                    />
                ))}
                </div>
                <p onClick={openModalRecover}>Clicar</p>
                <Submit className="submit-btn">Enviar</Submit>
            </form>
        </ModalDiv>
    </div>
  );
}

export default CodeRecoverPW;
