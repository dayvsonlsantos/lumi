import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import InputFieldFP from "./InputFieldFP/InputFieldFP";
import { Backdrop, Container, FormTop, CloseButton, Submit } from "../../Styles.Modal";

function ForgetPassword({ closeModalPass, openModalCode }) {
  
    //Verificação dos campos do formulário:

        const [values, setValues] = useState({
            emailFP: "",
            cpfFP: "",
        });

    // -----------------------------------------------------------------------

    //Configurando os atributos de cada Input, a partir do seu id:

        const inputs = [
            {
            id: "emailFP",
            type: "email",
            name: "emailFP",
            placeholder: "Informe o seu e-mail",
            errorMessage: "Esse não é um endereço de e-mail válido!",
            label: "E-mail",
            required: true,
            },
            {
            id: "cpfFP",
            type: "text",
            name: "cpfFP",
            placeholder: "Informe o seu CPF",
            errorMessage:
                "O CPF deve conter 11 caracteres, sendo informado apenas os números",
            label: "CPF",
            pattern: "^[0-9]{11}$",
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
    <Backdrop>
        <Container> 
            <form onSubmit={handleSubmit}>
                <FormTop> 
                <h1>Recuperar a senha</h1>
                <CloseButton onClick={closeModalPass}> 
                    <CgClose />
                </CloseButton>
                </FormTop>
                {inputs.map((input) => (
                    <InputFieldFP
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                    />
                ))}
                <p onClick={openModalCode} style={{cursor: "pointer"}}>Clicar</p>
                <Submit>Enviar</Submit>
            </form>
        </Container>
    </Backdrop>
  );
}

export default ForgetPassword;
