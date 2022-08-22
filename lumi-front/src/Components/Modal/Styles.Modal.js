import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  
  .logout{
    max-width: 50vw;
    min-height: 30vh;
    
    div.logoutbtn{
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: row;
      
      @media only screen and (max-width: 600px){
        flex-direction: column;
        margin-top: 2rem;
        button{
          margin-top: 0;
        }
      }

      button{
        @media only screen and (min-width: 551px) and (max-width: 850px) {
          width: 7rem;
          padding: 0.5rem 3rem;
          font-size: 0.7rem;
        }
        @media only screen and (max-width: 550px) {
          width: 10rem;
          padding: 0.5rem 3rem;
          font-size: 0.65rem;
        }
      }
    } 
  }
  .codeRecover{
    max-width: 50vw;
    min-height: 35vh;
  }

  .recoverPassword{
    max-width: 50vw;
    min-height: 40vh;
  }

  .forgetPassword{
    max-width: 50vw;
    min-height: 45vh;
  }

  .changePassword{
    form{
      min-height: 60vh;
      .organizarDiv{
        width: 100%;
      }
    }
  }
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.purpleOP};
  max-width: 50vw;
  min-height: 50vh;
  width: 100%;
  border-radius: 12px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .botaoFP{
    pointer-events: none;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    h1{
      font-size: 1.4rem;
      text-align: center;
    }

    @media screen and (max-height: 800px) {
      overflow-y: scroll;
      overflow-x: hidden;
      padding: 1rem;

      h1{
        font-size: 1rem;
      }
      
    }
    @media screen and (max-height: 700px) {
      max-height: 25rem;
    }
    p {
      color: white;
      text-align: center;
      font-size: 0.8rem;
    }
    a {
      text-decoration: none;
      color: white;
      text-align: center;
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 900px) {
    width: 450px;
  }

  @media only screen and (max-width: 550px) {
    min-width: 80%;
    label {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.65rem;
    }
    form h1{
      font-size: 0.8rem;
    }
    .loginH1{
      font-size: 1.2rem;
    }
    .recoverPassH1, .codePassH1, .forgetPassH1, .changePass, .loghoutH1{
      font-size: 1.1rem;
      @media screen and (max-width: 345px){
        width: 60%;
        font-size: 0.9rem;
      }
      @media screen and (max-width: 262px){
        width: 70%;
        font-size: 0.9rem;
      }
    }
  }

  @media only screen and (min-width: 551px) and (max-width: 700px) {
    min-width: 60%;
    label {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.65rem;
    }
    form h1{
      font-size: 1.2rem;
    }
  }
`;

export const ContainerReg = styled.div`
  background-color: ${({ theme }) => theme.purpleOP};
  max-width: 50vw;
  min-height: 50vh;
  width: 100%;
  border-radius: 12px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    aside{
    
      .dtNasc{
        flex-direction: row;
        text-align: center;
      }
      color-scheme: ${({ theme }) => theme.calendar};
    }

    @media screen and (max-width: 800px) {
      overflow-y: scroll;
      flex-wrap: nowrap;
      max-height: 25rem;
      padding-right: 1.2rem;
      margin-left: 1.2rem;
      overflow-x: hidden;
    }

    @media screen and (min-height: 680px) and (max-height: 700px) {
      max-height: 25rem;
      overflow-x: hidden;
    }

    @media screen and (max-width: 300px) {
      overflow-x: hidden;
      padding: 0;
      margin: auto;
    }

    aside {
      display: flex;
      flex-direction: column;
      align-self: center;
      width: 100%;
      max-width: 100%;

      @media screen and (min-width: 801px) {
        overflow-y: scroll;
        flex-wrap: nowrap;
        max-height: 20rem;
        padding-right: 1.2rem;
        margin-left: 1.2rem;
        overflow-x: hidden;
      }
      @media screen and (min-width: 1450px) {
        max-height: 25rem;
      }
      @media screen and (min-height: 680px) and (max-height: 700px) {
        overflow-y: scroll;
        flex-wrap: nowrap;
        max-height: 15rem;
        padding-right: 1.2rem;
        margin-left: 1.2rem;
        overflow-x: hidden;
      }
    }

    p {
      color: white;
      text-align: center;
      font-size: 0.8rem;
    }
    a {
      text-decoration: none;
      color: white;
      text-align: center;
      font-size: 0.8rem;
    }
  }

  @media screen and (min-width: 900px) {
    width: 450px;
  }

  @media only screen and (max-width: 550px) {
    min-width: 80%;
    label {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.65rem;
    }
  }

  @media only screen and (min-width: 551px) and (max-width: 700px) {
    min-width: 60%;
    label {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.65rem;
    }
  }
`;

export const FormTop = styled.div`
  display: flex;
  margin-bottom: 1rem;
  position: relative;

  h1 {
    font-size: 1.8rem;
    margin: auto;
    color: #ffffff;
    font-weight: 500;

    @media only screen and (min-width: 551px) and (max-width: 700px) {
      font-size: 1.4rem;
    }
    @media only screen and (max-width: 900px) {
      font-size: 1.6rem;
    }
    @media only screen and (max-width: 500px) {
      font-size: 1.2rem;
    }
    @media only screen and (max-width: 350px) {
      font-size: 1rem;
      text-align: center;
    }
  }
`;

export const CloseButton = styled.div`
  left: 90%;
  position: absolute;
  display: flex;
  align-self: center;
  border: none;
  cursor: pointer;
  background: none;
  > svg {
    color: #ffffff;
    font-size: 1.5rem;
  }
`;

export const Submit = styled.button`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  width: 9rem;
  border-radius: 12px;
  border: none;
  background-color: ${({ theme }) => theme.purpleVariant};
  color: #e8f1f2;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.15rem;
  cursor: pointer;
  display: flex;
  align-self: center;
  justify-content: center;
  &:hover {
    color: #7d7d7d;
    background-color: #ffffff;
    transition: 0.5s ease;
  }
  @media only screen and (min-width: 551px) and (max-width: 800px) {
    width: 7rem;
    padding: 0.5rem 3rem;
    font-size: 0.7rem;
  }
  @media only screen and (max-width: 550px) {
    width: 5rem;
    padding: 0.5rem 3rem;
    font-size: 0.65rem;
  }
`;

export const InputGroup = styled.div`
  > label {
    color: #ffffff;
  }
  > input {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: ${({ theme }) => theme.user_input};
    color: ${({ theme }) => theme.gray};
    transition: 0.5s ease;
    margin: 1rem 0;
    width: 100%;
    border: none;
    border-radius: 12px;
    padding: 0.7rem 1rem;
    font-size: 0.9em;
    :focus-visible {
      outline: none;
    }
    :invalid[focused="true"] ~ span {
      display: block;
    }
    ::placeholder {
      color: ${({ theme }) => theme.placeholderOP};
    }
    @media screen and (min-width: 550px) and (max-width: 800px) {
      padding: 0.4rem 0.5rem;
      margin: 0.6rem 0;
    }
    @media only screen and (max-width: 550px) {
      padding: 0.4rem 0.5rem;
      margin: 0.6rem 0;
    }
  }
  > span {
    font-size: 0.8rem;
    background-color: ${({ theme }) => theme.purpleVariant};
    transition: 0.5s ease;
    border-radius: 12px;
    padding: 0.5rem;
    color: white;
    margin-bottom: 0.5rem;
    text-align: justify;
    display: none;

    @media screen and (max-width: 550px) {
      font-size: 0.65rem;
    }
    @media screen and (max-height: 800px) {
      font-size: 0.65rem;
    }
  }
`;

export const Esqueciasenha = styled.div`
  width: 8rem;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-self: center;
  margin-left: auto;
  border: none;
  margin-bottom: 1rem;
  border-radius: 12px;
  background: none;
  color: #ffffff;
  cursor: pointer;
  @media only screen and (max-width: 550px) {
    margin-bottom: 0;
    font-size: 0.65rem;
  }
`;

export const ChangePage = styled.button`
  width: 8rem;
  display: flex;
  justify-content: center;
  align-self: center;
  border: none;
  border-radius: 12px;
  background: none;
  color: #ffffff;
  cursor: pointer;
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0.4rem;
  label {
    margin-bottom: 0.8rem;
    text-align: center;
    color: #ffffff;
  }
  .labelPerfil{
    color: ${({ theme }) => theme.gray};
    font-size: 1.1rem;
    transition: 0.5s ease;
  }
  span{
    order: 2;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  span {
    margin-left: 0.8rem;
    border-radius: 12px;
    text-align: center;
    padding: 0.3rem;
    width: 3.5rem;
    background: ${({ theme }) => theme.user_input};
    color: ${({ theme }) => theme.gray};
    transition: 0.5s ease;
  }
`;

export const StyledContainer = styled(ToastContainer)`
  &&&.Toastify__toast-container {
  }
  .Toastify__toast {
    background: ${({ theme }) => theme.user_input};
    transition: 0.5s ease;
  }
  .Toastify__toast-body {
    color: ${({ theme }) => theme.gray};
    text-align: center;
  }
  .Toastify__progress-bar {
    background: ${({ theme }) => theme.purpleOP};
  }
`;

export const AceitarTermos = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-around;
  margin-top: 1rem;
  text-align: center;
  width: 90%;
  label{
    color: #ffffff;
    font-size: 0.9rem;
    a{
      font-size: 0.9rem;
      text-decoration: underline;
    }
  }
  @media screen and (max-width: 890px) {
    label{
      font-size: 0.8rem;
      a{
        font-size: 0.8rem;
      }
    }   
  }
  @media screen and (max-width: 800px) {
    label{
      width: 80%;
      a{
        font-size: 0.7rem;
      }
    }   
  }
  @media screen and (max-width: 600px) {
    label{
      font-size: 0.7rem;
      a{
        font-size: 0.7rem;
      }
    }   
  }
`