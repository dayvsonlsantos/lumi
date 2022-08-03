import styled from "styled-components";

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
      font-size: 0.9rem;
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
        max-height: 25rem;
        padding-right: 1.2rem;
        margin-left: 1.2rem;
        overflow-x: hidden;
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
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 8rem;
  border-radius: 12px;
  border: none;
  background-color: ${({ theme }) => theme.purpleVariant};
  color: #e8f1f2;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: 400;
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
  @media only screen and (min-width: 550px) and (max-width: 800px) {
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
  margin-top: 1rem;
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
  margin: 1rem;

  label {
    margin-bottom: 0.8rem;
    text-align: center;
    color: #ffffff;
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
    width: 3.5rem;
    background: ${({ theme }) => theme.user_input};
    color: ${({ theme }) => theme.gray};
  }
`;
